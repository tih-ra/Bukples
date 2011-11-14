# decalring the class
class Bukples.Models.Bookmark extends Backbone.Model
	
  defaults:
    body: null
    title: null
    language: null

  url: -> if @id then "/bookmarks/#{@id}" else "/bookmarks"

    # return false if validates correctly, else returns a value (or some)
#  validate: (attr) ->
#    return false

  toJSON: ->
    body: @get('body')
    title: @get('title')
    language: @get('language')