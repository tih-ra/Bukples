# creating Bukples.Views.Root (global) as Root (scoped)
Root = Bukples.Views.Root = {}

# aliasing Bukples.Templates (global) as Templates (scoped) - this, ofcourse, is optional
Templates = Bukples.Templates

# declaring the layout class
class Root.Layout extends Backbone.View
    className: 'root'
    template: Templates['root.layout']
    initialize: ->
        # checking if there is a need to reload the layout element for this view.
        if $('html').attr('class') isnt @className
            # setting the html class to the view name
            $('html').attr('class',@className)
            # rendering the template into the layout element
            $(@el).html @template.render()
            # replacing the body content with the element
            $(document.body).html @el

# declaring the index class        
class Root.Index extends Backbone.View
    template: Templates['root.index']
    initialize: ->
        # renders the layout.
        new Root.Layout
        # renders the main content.
        $(@el).html @template.render()
        # replacing the #root content with the element
        $('#root').html @el