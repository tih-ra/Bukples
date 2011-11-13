Bookmark = require('models/bookmark.js');

exports.post = (req, res) ->
  bookmark = new Bookmark(
    title: req.body.title
    body: req.body.body
  ).save()
  res.send(bookmark)

exports.list = (req, res) ->
  Bookmark.find (err, bookmarks) ->
    res.send bookmarks