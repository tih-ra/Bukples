(function() {
  var Bookmark, Templates;
  var __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) {
    for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; }
    function ctor() { this.constructor = child; }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor;
    child.__super__ = parent.prototype;
    return child;
  };
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
      return this.collection.bind('add', this.addOne, this);
    };
    Index.prototype.addForm = function() {
      var view;
      view = new Bookmark.New({
        collection: this.collection
      });
      return $('#header').html(view.render());
    };
    Index.prototype.addAll = function() {
      return this.collection.each(this.addOne);
    };
    Index.prototype.addOne = function(bookmark) {
      var view;
      view = new Bookmark.Bookmark({
        model: bookmark
      });
      return $('#bookmarks').prepend(view.render());
    };
    Index.prototype.render = function() {
      $(this.el).html(this.template.render());
      this.addAll();
      return this.addForm();
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
      model.set(this.attributes());
      return this.collection.add(model);
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