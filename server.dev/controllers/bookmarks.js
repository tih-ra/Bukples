(function() {
  var Bookmark;
  Bookmark = require('models/bookmark.js');
  exports.post = function(req, res) {
    return new Bookmark({
      title: req.body.title,
      body: req.body.body
    }).save();
  };
  exports.list = function(req, res) {
    return Bookmark.find(function(err, bookmarks) {
      return res.send(bookmarks);
    });
  };
}).call(this);
