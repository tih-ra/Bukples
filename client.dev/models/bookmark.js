(function() {
  var __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) {
    for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; }
    function ctor() { this.constructor = child; }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor;
    child.__super__ = parent.prototype;
    return child;
  };
  Bukples.Models.Bookmark = (function() {
    __extends(Bookmark, Backbone.Model);
    function Bookmark() {
      Bookmark.__super__.constructor.apply(this, arguments);
    }
    Bookmark.prototype.defaults = {
      body: null,
      title: null
    };
    Bookmark.prototype.url = function() {
      return "/bookmarks/" + (this.get('id'));
    };
    Bookmark.prototype.validate = function(attr) {
      return false;
    };
    return Bookmark;
  })();
}).call(this);
