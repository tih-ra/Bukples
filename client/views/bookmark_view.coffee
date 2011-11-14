# creating Bukples.Views.Bookmark (global) as Bookmark (scoped)
Bookmark = Bukples.Views.Bookmark = {}

# aliasing Bukples.Templates (global) as Templates (scoped) - this, ofcourse, is optional
Templates = Bukples.Templates

# declaring the index class        
class Bookmark.Index extends Backbone.View
	
  template: Templates['bookmarks.index']

  initialize: ->
    new Bukples.Views.Root.Layout

    _.bindAll @, 'addOne', 'addAll'

    @collection.bind('add', @addOne, @)
    @collection.bind('reset', @addAll, @)
    @collection.bind('all',   @render, @)
    @collection.fetch()
    
  addForm: ->
    view = new Bookmark.New(collection: @collection)
    $('#header').html(view.render())

  addLanguages: ->
    console.log 'lan'
    languages = new Bukples.Collections.Languages
    view = new Bukples.Views.Language.List(collection: languages)
    $('#languages').html(view.render())
  
  addOne: (bookmark) ->
    view = new Bookmark.Bookmark(model: bookmark)
    $('#bookmarks').prepend(view.render()) 

  addAll: ->
    @collection.each(@addOne)

  render: ->
    $(@el).html @template.render()
    @addForm()
    @addLanguages()

class Bookmark.Bookmark extends Backbone.View

  template: Templates['bookmarks.bookmark']
  className: 'span5'

  render: ->
    $(@el).html @template.render(model: @model)

class Bookmark.New extends Backbone.View
	
  template: Templates['bookmarks.new']

  events:
    "submit form": "save"

  save: (e) ->
    e.preventDefault()
     
    model = new Bukples.Models.Bookmark
    
    model.save @attributes(),
      success: (model, response) =>
        @collection.add model

      error: (model, errors) =>
        console.log errors

  attributes: ->
    title: 'test title'
    body: @$('textarea[name="body"]').val()

  render: -> 
    $(@el).html @template.render()
