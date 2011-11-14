# aliasing Bukples.Views.Root (global) as Views (scoped) - this, ofcourse, is optional
Views = Bukples.Views

# decalring the class
class Bukples.Routers.Root extends Backbone.Router
  routes:
    'language/:language' : 'bookmarks'
    '/*' : 'bookmarks'
        #'/about'    : 'about'

  index: ->
    console.log 'Root.index() was called upon!'
    new Views.Root.Index

  bookmarks: (language) ->
    new Views.Bookmark.Index(language: language)
    
    