(function() {
  var Bookmark, Templates;
  var __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) {
    for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; }
    function ctor() { this.constructor = child; }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor;
    child.__super__ = parent.prototype;
    return child;
  }, __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
  Bookmark = Bukples.Views.Bookmark = {};
  Templates = Bukples.Templates;
  Bookmark.Index = (function() {
    __extends(Index, Backbone.View);
    function Index() {
      Index.__super__.constructor.apply(this, arguments);
    }
    Index.prototype.template = Templates['bookmarks.index'];
    Index.prototype.initialize = function() {
      new Bukples.Views.Root.Layout;
      _.bindAll(this, 'addOne', 'addAll');
      this.collection.bind('add', this.addOne, this);
      this.collection.bind('reset', this.addAll, this);
      this.collection.bind('all', this.render, this);
      return this.collection.fetch();
    };
    Index.prototype.addForm = function() {
      var view;
      view = new Bookmark.New({
        collection: this.collection
      });
      return $('#header').html(view.render());
    };
    Index.prototype.addLanguages = function() {
      var languages, view;
      console.log('lan');
      languages = new Bukples.Collections.Languages;
      view = new Bukples.Views.Language.List({
        collection: languages
      });
      return $('#languages').html(view.render());
    };
    Index.prototype.addOne = function(bookmark) {
      var view;
      view = new Bookmark.Bookmark({
        model: bookmark
      });
      return $('#bookmarks').prepend(view.render());
    };
    Index.prototype.addAll = function() {
      return this.collection.each(this.addOne);
    };
    Index.prototype.render = function() {
      $(this.el).html(this.template.render());
      this.addForm();
      return this.addLanguages();
    };
    return Index;
  })();
  Bookmark.Bookmark = (function() {
    __extends(Bookmark, Backbone.View);
    function Bookmark() {
      Bookmark.__super__.constructor.apply(this, arguments);
    }
    Bookmark.prototype.template = Templates['bookmarks.bookmark'];
    Bookmark.prototype.className = 'span5';
    Bookmark.prototype.render = function() {
      return $(this.el).html(this.template.render({
        model: this.model
      }));
    };
    return Bookmark;
  })();
  Bookmark.New = (function() {
    __extends(New, Backbone.View);
    function New() {
      New.__super__.constructor.apply(this, arguments);
    }
    New.prototype.template = Templates['bookmarks.new'];
    New.prototype.events = {
      "submit form": "save"
    };
    New.prototype.save = function(e) {
      var model;
      e.preventDefault();
      model = new Bukples.Models.Bookmark;
      return model.save(this.attributes(), {
        success: __bind(function(model, response) {
          return this.collection.add(model);
        }, this),
        error: __bind(function(model, errors) {
          return console.log(errors);
        }, this)
      });
    };
    New.prototype.attributes = function() {
      return {
        title: 'test title',
        body: this.$('textarea[name="body"]').val()
      };
    };
    New.prototype.render = function() {
      return $(this.el).html(this.template.render());
    };
    return New;
  })();
}).call(this);
