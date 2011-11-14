# aliasing Bukples.Models (global) as Models (scoped) - this, ofcourse, is optional
Models = Bukples.Models

# decalring the class
class Bukples.Collections.Languages extends Backbone.Collection
  model: Models.Language
  url: '/languages'