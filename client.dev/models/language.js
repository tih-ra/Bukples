(function() {
  var __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) {
    for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; }
    function ctor() { this.constructor = child; }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor;
    child.__super__ = parent.prototype;
    return child;
  };
  Bukples.Models.Language = (function() {
    __extends(Language, Backbone.Model);
    function Language() {
      Language.__super__.constructor.apply(this, arguments);
    }
    Language.prototype.defaults = {
      name: null,
      id: null
    };
    Language.prototype.url = function() {
      return "/languages/" + (this.get('id'));
    };
    Language.prototype.validate = function(attr) {
      return false;
    };
    Language.prototype.toJSON = function() {
      return {
        name: this.get('name'),
        id: this.get('id')
      };
    };
    return Language;
  })();
}).call(this);
