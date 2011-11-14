# aliasing Bukples.Views.Root (global) as Views (scoped) - this, ofcourse, is optional
Views = Bukples.Views

# decalring the class
class Bukples.Routers.Root extends Backbone.Router
  routes:
    '/*' : 'index'
    'bookmarks' : 'bookmarks'
        #'/about'    : 'about'
        
  index: ->
    console.log 'Root.index() was called upon!'
    new Views.Root.Index

  bookmarks: ->
    console.log 'Bookmark.index() was called upon!'
    bookmarks = new Bukples.Collections.Bookmarks
    new Views.Bookmark.Index(collection: bookmarks)
    