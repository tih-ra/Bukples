# decalring the class
class Bukples.Models.Language extends Backbone.Model
	
  defaults:
    name: null
    code: null
	
  url: -> "/languages/#{@get('code')}"

  validate: (attr) ->
    return false

  toJSON: ->
    name: @get('name')
    id: @get('code')