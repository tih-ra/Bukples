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
    
  addForm: ->
    view = new Bookmark.New(collection: @collection)
    $('#header').html(view.render())

  addAll: ->
    @collection.each(@addOne)	

  addOne: (bookmark) ->
    view = new Bookmark.Bookmark(model: bookmark)
    $('#bookmarks').prepend(view.render()) 

  render: ->
    $(@el).html @template.render()
    @addAll()
    @addForm()
    #$('#header').html @el

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

    model.set @attributes()
    @collection.add model

    

  attributes: ->
    title: 'test title'
    body: @$('textarea[name="body"]').val()

  render: -> 
    $(@el).html @template.render()
