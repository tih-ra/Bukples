mongoose = require("mongoose")
app = Bukples = process['Bukples']

Schema = mongoose.Schema
postSchema = new Schema(
  title: String
  body: String
  language: String
)
module.exports = app.db.model("Bookmark", postSchema)