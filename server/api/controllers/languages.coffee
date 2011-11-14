Languages = [
  id: "01"
  name: "Ruby"
,
  id: "01"
  name: "JavaScript"
,
  id: "03"
  name: "CoffeeScript"
,
  id: "04"
  name: "Bash (shell)"
,
  id: "05"
  name: "HTML / XML"
,
  id: "06"
  name: "Java"
,
  id: "07"
  name: "YAML"
,
  id: "08"
  name: "CSS"
,
  id: "09"
  name: "HTML (ERB / Rails)"
,
  id: "10"
  name: "Objective-C/C++"
,
  id: "11"
  name: "Plain text<"
,
  id: "12"
  name: "Python"
,
  id: "13"
  name: "SQL"
 ]


exports.list = (req, res) ->
  res.send Languages
