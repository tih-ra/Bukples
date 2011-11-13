(function() {
  var Schema, mongoose, postSchema;
  mongoose = require("mongoose");
  Schema = mongoose.Schema;
  postSchema = new Schema({
    title: String,
    body: String
  });
  module.exports = mongoose.model("Bookmark", postSchema);
}).call(this);
