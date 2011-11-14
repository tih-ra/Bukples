(function() {
  var Language, Templates;
  var __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) {
    for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; }
    function ctor() { this.constructor = child; }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor;
    child.__super__ = parent.prototype;
    return child;
  };
  Language = Bukples.Views.Language = {};
  Templates = Bukples.Templates;
  Language.List = (function() {
    __extends(List, Backbone.View);
    function List() {
      List.__super__.constructor.apply(this, arguments);
    }
    List.prototype.tagName = 'ul';
    List.prototype.initialize = function() {
      _.bindAll(this, 'addOne', 'addAll');
      this.collection.bind('add', this.addOne, this);
      this.collection.bind('reset', this.addAll, this);
      return this.collection.fetch();
    };
    List.prototype.addOne = function(language) {
      var view;
      view = new Language.Language({
        model: language
      });
      return $(this.el).prepend(view.render().el);
    };
    List.prototype.addAll = function() {
      return this.collection.each(this.addOne);
    };
    List.prototype.render = function() {
      return this;
    };
    return List;
  })();
  Language.Language = (function() {
    __extends(Language, Backbone.View);
    function Language() {
      Language.__super__.constructor.apply(this, arguments);
    }
    Language.prototype.template = Templates['languages.language'];
    Language.prototype.tagName = 'li';
    Language.prototype.render = function() {
      $(this.el).html(this.template.render({
        model: this.model
      }));
      return this;
    };
    return Language;
  })();
  Language.Select = (function() {
    __extends(Select, Backbone.View);
    function Select() {
      Select.__super__.constructor.apply(this, arguments);
    }
    Select.prototype.tagName = 'select';
    Select.prototype.initialize = function() {
      _.bindAll(this, 'addOptions', 'addOption');
      return this.collection.bind('reset', this.addOptions, this);
    };
    Select.prototype.addOptions = function() {
      return this.collection.each(this.addOption);
    };
    Select.prototype.addOption = function(language) {
      var option, view;
      view = new Backbone.View;
      option = view.make('option', {
        value: language.get('code')
      }, language.get('name'));
      return $(this.el).prepend(option);
    };
    Select.prototype.render = function() {
      return this;
    };
    return Select;
  })();
}).call(this);
