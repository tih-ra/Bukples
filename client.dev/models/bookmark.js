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
      title: null,
      language: null
    };
    Bookmark.prototype.url = function() {
      if (this.id) {
        return "/bookmarks/" + this.id;
      } else {
        return "/bookmarks";
      }
    };
    Bookmark.prototype.toJSON = function() {
      return {
        body: this.get('body'),
        title: this.get('title'),
        language: this.get('language')
      };
    };
    return Bookmark;
  })();
}).call(this);
