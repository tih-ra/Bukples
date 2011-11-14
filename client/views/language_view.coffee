Language = Bukples.Views.Language = {}

Templates = Bukples.Templates

class Language.List extends Backbone.View
  tagName: 'ul'

  initialize: ->

    _.bindAll @, 'addOne', 'addAll'

    @collection.bind('add', @addOne, @)
    @collection.bind('reset', @addAll, @)
    @collection.fetch()

  addOne: (language) ->
    view = new Language.Language(model: language)
    $(@el).prepend(view.render().el) 

  addAll: ->
    @collection.each(@addOne)

  render: ->
    @


class Language.Language extends Backbone.View

  template: Templates['languages.language']
  tagName: 'li'

  render: ->
    $(@el).html(@template.render(model: @model))
    @

class Language.Select extends Backbone.View
  tagName: 'select'

  initialize: ->
    _.bindAll @, 'addOptions', 'addOption'
	
    @collection.bind('reset', @addOptions, @)
   
  
  addOptions: ->
    @collection.each(@addOption)

  addOption: (language) ->
    view = new Backbone.View
    option = view.make 'option', {value: language.get('code')}, language.get('name')
    $(@el).prepend(option)
    
  render: ->
    
    @