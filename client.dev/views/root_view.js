(function() {
  var Root, Templates;
  var __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) {
    for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; }
    function ctor() { this.constructor = child; }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor;
    child.__super__ = parent.prototype;
    return child;
  };
  Root = Bukples.Views.Root = {};
  Templates = Bukples.Templates;
  Root.Layout = (function() {
    __extends(Layout, Backbone.View);
    function Layout() {
      Layout.__super__.constructor.apply(this, arguments);
    }
    Layout.prototype.className = 'root';
    Layout.prototype.template = Templates['root.layout'];
    Layout.prototype.initialize = function() {
      if ($('html').attr('class') !== this.className) {
        $('html').attr('class', this.className);
        $(this.el).html(this.template.render());
        return $(document.body).html(this.el);
      }
    };
    return Layout;
  })();
  Root.Index = (function() {
    __extends(Index, Backbone.View);
    function Index() {
      Index.__super__.constructor.apply(this, arguments);
    }
    Index.prototype.template = Templates['root.index'];
    Index.prototype.initialize = function() {
      new Root.Layout;
      $(this.el).html(this.template.render());
      return $('#root').html(this.el);
    };
    return Index;
  })();
}).call(this);
