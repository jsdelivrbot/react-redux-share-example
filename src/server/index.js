var path = require('path');

var express = require('express');
var app = express();

var server = require('http').Server(app);
var store = require('../shared/store');
var syncReduxServer = require('redux-share').server(store, server);

app.use('/redux',syncReduxServer.getMiddleware());

var publicDir = path.join(__dirname, '..', 'public');

app.use('/public', express.static(publicDir));

app.get('/', function(req, res) {
  res.sendFile(path.join(publicDir, 'index.html'));
});

server.listen(3000);
