(function() {
  var Bukples, app, bookmark, express, mongoose;
  express = require('kassit/node_modules/express');
  mongoose = require('mongoose');
  app = Bukples = process['Bukples'] = express.createServer();
  app.mode = !(typeof getMode === "function" ? getMode() : void 0) ? 'prod' : getMode();
  app.port = 3001;
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
  bookmark = require('./controllers/bookmarks.js');
  app.post('/bookmarks', bookmark.post);
  app.get('/bookmarks', bookmark.list);
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
