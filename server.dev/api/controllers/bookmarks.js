(function() {
  var Bookmark;
  Bookmark = require('models/bookmark.js');
  exports.post = function(req, res) {
    var bookmark;
    bookmark = new Bookmark({
      title: req.body.title,
      body: req.body.body
    }).save();
    return res.send(bookmark);
  };
  exports.list = function(req, res) {
    return Bookmark.find(function(err, bookmarks) {
      return res.send(bookmarks);
    });
  };
}).call(this);
