(function() {
  var Schema, mongoose, postSchema;
  mongoose = require("mongoose");
  Schema = mongoose.Schema;
  postSchema = new Schema({
    title: String,
    body: String,
    language: String
  });
  module.exports = mongoose.model("Bookmark", postSchema);
}).call(this);
