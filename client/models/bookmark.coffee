# decalring the class
class Bukples.Models.Bookmark extends Backbone.Model
	
  defaults:
    body: null
    title: null

  url: -> "/bookmarks/#{@get('id')}"

    # return false if validates correctly, else returns a value (or some)
  validate: (attr) ->
    return false