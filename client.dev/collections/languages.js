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
  Bukples.Collections.Languages = (function() {
    __extends(Languages, Backbone.Collection);
    function Languages() {
      Languages.__super__.constructor.apply(this, arguments);
    }
    Languages.prototype.model = Models.Language;
    Languages.prototype.url = '/languages';
    return Languages;
  })();
}).call(this);
