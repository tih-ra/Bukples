Bookmark = require('../models/bookmark.js');

exports.post = (req, res) ->
  new Bookmark(
    title: req.body.title
    body: req.body.body
  ).save()

exports.list = (req, res) ->
  Bookmark.find (err, bookmarks) ->
    res.send bookmarks