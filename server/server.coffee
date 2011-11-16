require.paths.unshift('./node_modules')
express = require('kassit/node_modules/express')
mongoose = require('mongoose')
cf = require("cloudfoundry")

app = Bukples = process['Bukples'] = express.createServer()
app.mode = if !(getMode?()) then 'prod' else getMode()
app.port = cf.getAppPort()

app.use(express.logger(format: "\u001b[1m :date \u001b[1m:method\u001b[0m \u001b[33m:url\u001b[0m :response-time ms\u001b[0m :status")) unless app.mode is 'prod'


# CONNECT TO MONGOOSE FOR CLOUD FOUNDRY
mongoConfig = cf.getServiceConfig("bukples") 
app.db = mongoose.createConnection("mongo://" + mongoConfig.username + ":" + mongoConfig.password + "@" + mongoConfig.hostname + ":" + mongoConfig.port + "/" + mongoConfig.db)

app.use(express.bodyParser())
app.use(express.cookieParser())
app.use(express.session({ secret: '47465210664086044' }))

app.get '/', (req, res) -> res.sendfile('bukples.html')
app.get '/bukples.js', (req, res) -> res.sendfile('bukples.js')
app.get '/include.json', (req, res) -> res.sendfile('include.json')

app.get '/static/*', (req, res) -> res.sendfile('static/' + req.params[0])
#
# Rest

require.paths.unshift( if app.mode is 'prod' then './api' else './server.dev/api');

bookmarks = require('controllers/bookmarks.js')
app.post('/bookmarks', bookmarks.post)
app.get('/bookmarks', bookmarks.list)

languages = require('controllers/languages.js')
app.get('/languages', languages.list)
#
# serving only dev/prod files
(app.get '/client.dev/*', (req, res) ->  res.sendfile('client.dev/' + req.params[0])) if app.mode is 'dev'
(app.get '/client.prod/*', (req, res) -> res.sendfile('client.prod/' + req.params[0])) if app.mode is 'prod'
        
console.log "  ::loading: Bukples is up and serving at http://localhost:#{app.port}"
app.listen(app.port)