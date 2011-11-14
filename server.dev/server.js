(function() {
  var Bukples, app, bookmarks, express, languages, mongoose;
  express = require('kassit/node_modules/express');
  mongoose = require('mongoose');
  app = Bukples = process['Bukples'] = express.createServer();
  app.mode = !(typeof getMode === "function" ? getMode() : void 0) ? 'prod' : getMode();
  app.port = 3001;
  app.use(express.logger({
    format: "\u001b[1m :date \u001b[1m:method\u001b[0m \u001b[33m:url\u001b[0m :response-time ms\u001b[0m :status"
  }));
  mongoose.connect('mongodb://localhost/bukples');
  app.use(express.bodyParser());
  app.use(express.cookieParser());
  app.use(express.session({
    secret: '47465210664086044'
  }));
  app.get('/', function(req, res) {
    return res.sendfile('bukples.html');
  });
  app.get('/bukples.js', function(req, res) {
    return res.sendfile('bukples.js');
  });
  app.get('/include.json', function(req, res) {
    return res.sendfile('include.json');
  });
  app.get('/static/*', function(req, res) {
    return res.sendfile('static/' + req.params[0]);
  });
  require.paths.unshift('./server.dev/api');
  bookmarks = require('controllers/bookmarks.js');
  app.post('/bookmarks', bookmarks.post);
  app.get('/bookmarks', bookmarks.list);
  languages = require('controllers/languages.js');
  app.get('/languages', languages.list);
  if (app.mode === 'dev') {
    app.get('/client.dev/*', function(req, res) {
      return res.sendfile('client.dev/' + req.params[0]);
    });
  }
  if (app.mode === 'prod') {
    app.get('/client.prod/*', function(req, res) {
      return res.sendfile('client.prod/' + req.params[0]);
    });
  }
  console.log("  ::loading: Bukples is up and serving at http://localhost:" + app.port);
  app.listen(app.port);
}).call(this);
