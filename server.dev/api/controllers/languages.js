(function() {
  var Languages;
  Languages = [
    {
      code: "ruby",
      name: "Ruby"
    }, {
      code: "javascript",
      name: "JavaScript"
    }, {
      code: "coffee",
      name: "CoffeeScript"
    }, {
      code: "bash",
      name: "Bash (shell)"
    }, {
      code: "html",
      name: "HTML"
    }, {
      code: "java",
      name: "Java"
    }, {
      code: "css",
      name: "CSS"
    }, {
      code: "objectivec",
      name: "Objective-C"
    }, {
      code: "python",
      name: "Python"
    }, {
      code: "sql",
      name: "SQL"
    }, {
      code: "perl",
      name: "Perl"
    }, {
      code: "php",
      name: "PHP"
    }, {
      code: "scala",
      name: "Scala"
    }, {
      code: "go",
      name: "Go"
    }, {
      code: "xml",
      name: "Xml"
    }, {
      code: "diff",
      name: "Diff"
    }, {
      code: "cpp",
      name: "C++"
    }, {
      code: "erlang",
      name: "Erlang"
    }, {
      code: "cmake",
      name: "CMake"
    }
  ];
  exports.list = function(req, res) {
    return res.send(Languages);
  };
}).call(this);
