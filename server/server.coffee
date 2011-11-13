express = require('kassit/node_modules/express')
mongoose = require('mongoose')

app = Bukples = process['Bukples'] = express.createServer()
app.mode = if !(getMode?()) then 'prod' else getMode()
app.port = 3001

app.use express.logger(format: "\u001b[1m :date \u001b[1m:method\u001b[0m \u001b[33m:url\u001b[0m :response-time ms\u001b[0m :status")

mongoose.connect('mongodb://localhost/bukples');

app.use(express.bodyParser())
app.use(express.cookieParser())
app.use(express.session({ secret: '47465210664086044' }))

app.get '/', (req, res) -> res.sendfile('bukples.html')
app.get '/bukples.js', (req, res) -> res.sendfile('bukples.js')
app.get '/include.json', (req, res) -> res.sendfile('include.json')

app.get '/static/*', (req, res) -> res.sendfile('static/' + req.params[0])
#
# Rest
require.paths.unshift('./server.dev/api');
bookmark = require('controllers/bookmarks.js')
app.post('/bookmarks', bookmark.post)
app.get('/bookmarks', bookmark.list)
#
# serving only dev/prod files
(app.get '/client.dev/*', (req, res) ->  res.sendfile('client.dev/' + req.params[0])) if app.mode is 'dev'
(app.get '/client.prod/*', (req, res) -> res.sendfile('client.prod/' + req.params[0])) if app.mode is 'prod'
        
console.log "  ::loading: Bukples is up and serving at http://localhost:#{app.port}"
app.listen(app.port);