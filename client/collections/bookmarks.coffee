# aliasing Bukples.Models (global) as Models (scoped) - this, ofcourse, is optional
Models = Bukples.Models

# decalring the class
class Bukples.Collections.Bookmarks extends Backbone.Collection
  model: Models.Bookmark
  url: '/bookmarks'

  filtered: (language) ->
    @filter (bookmark) ->
      bookmark.get("language") is language