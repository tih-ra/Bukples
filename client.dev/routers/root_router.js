(function() {
  var Views;
  var __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) {
    for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; }
    function ctor() { this.constructor = child; }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor;
    child.__super__ = parent.prototype;
    return child;
  };
  Views = Bukples.Views;
  Bukples.Routers.Root = (function() {
    __extends(Root, Backbone.Router);
    function Root() {
      Root.__super__.constructor.apply(this, arguments);
    }
    Root.prototype.routes = {
      '/*': 'index',
      'bookmarks': 'bookmarks'
    };
    Root.prototype.index = function() {
      console.log('Root.index() was called upon!');
      return new Views.Root.Index;
    };
    Root.prototype.bookmarks = function() {
      var bookbarks, view;
      console.log('Bookmark.index() was called upon!');
      bookbarks = new Bukples.Collections.Bookmarks;
      view = new Views.Bookmark.Index({
        collection: bookbarks
      });
      return view.render();
    };
    return Root;
  })();
}).call(this);
