# creating Bukples.Views.Bookmark (global) as Bookmark (scoped)
Bookmark = Bukples.Views.Bookmark = {}

# aliasing Bukples.Templates (global) as Templates (scoped) - this, ofcourse, is optional
Templates = Bukples.Templates

# declaring the index class        
class Bookmark.Index extends Backbone.View
	
  
  initialize: ->
    new Bukples.Views.Root.Layout
    @languages = new Bukples.Collections.Languages

    _.bindAll @, 'addOne', 'addAll'

    @collection.bind('add', @addOne, @)
    @collection.bind('reset', @addAll, @)
    @collection.bind('all',   @render, @)
    @collection.fetch()
    
  addForm: ->
    view = new Bookmark.New({collection: @collection, languages: @languages})
    $('#header').html(view.render().el)

  addLanguages: ->
    view = new Bukples.Views.Language.List(collection: @languages)
    $('#languages').html(view.render().el)
  
  addOne: (bookmark) ->
    view = new Bookmark.Bookmark(model: bookmark)
    $('#bookmarks').prepend(view.render().el)
     

  addAll: ->
    @collection.each(@addOne)

  render: ->
    hljs.initHighlighting()
    @addForm()
    @addLanguages()
    
    @
    

class Bookmark.Bookmark extends Backbone.View

  template: Templates['bookmarks.bookmark']
  className: 'span8'

  render: ->
    
    $(@el).html @template.render(model: @model)
    @
    

class Bookmark.New extends Backbone.View
	
  template: Templates['bookmarks.new']

  events:
    "submit form": "save"

  initialize: ->
    @collection = @options.collection
    @languages = @options.languages
	
  languageSelect: ->
    view = new Bukples.Views.Language.Select(collection: @languages)
    @$('#languages_select').append(view.render().el)
	

  save: (e) ->
    e.preventDefault()
     
    model = new Bukples.Models.Bookmark
    
    model.save @attributes(),
      success: (model, response) =>
        @collection.add model
        console.log model

      error: (model, errors) =>
        console.log errors

  attributes: ->
    title: @$('input[name="title"]').val()
    body: @$('textarea[name="body"]').val()
    language: @$('select').val()

  render: -> 
    $(@el).html @template.render()
    @languageSelect()

    @
