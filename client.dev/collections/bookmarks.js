(function() {
  var Models;
  var __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) {
    for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; }
    function ctor() { this.constructor = child; }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor;
    child.__super__ = parent.prototype;
    return child;
  };
  Models = Bukples.Models;
  Bukples.Collections.Bookmarks = (function() {
    __extends(Bookmarks, Backbone.Collection);
    function Bookmarks() {
      Bookmarks.__super__.constructor.apply(this, arguments);
    }
    Bookmarks.prototype.model = Models.Bookmark;
    Bookmarks.prototype.url = '/bookmarks';
    return Bookmarks;
  })();
}).call(this);
