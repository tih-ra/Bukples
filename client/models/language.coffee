# decalring the class
class Bukples.Models.Language extends Backbone.Model
	
  defaults:
    name: null
    id: null
	
  url: -> "/languages/#{@get('id')}"

  validate: (attr) ->
    return false

  toJSON: ->
    name: @get('name')
    id: @get('id')