Language = Bukples.Views.Language = {}

Templates = Bukples.Templates

class Language.List extends Backbone.View
  tagName: 'ul'

  initialize: ->

    _.bindAll @, 'addOne', 'addAll'

    @collection.bind('add', @addOne, @)
    @collection.bind('reset', @addAll, @)
    @collection.bind('all',   @render, @)
    @collection.fetch()

  addOne: (language) ->
    view = new Language.Language(model: language)
    $(@el).prepend(view.render()) 

  addAll: ->
    @collection.each(@addOne)

  render: ->
    $(@el)


class Language.Language extends Backbone.View

  template: Templates['languages.language']
  tagName: 'li'

  render: ->
    $(@el).html @template.render(model: @model)