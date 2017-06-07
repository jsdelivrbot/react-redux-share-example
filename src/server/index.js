var path = require('path');

var express = require('express');
var app = express();

var server = require('http').Server(app);
var redux = require('redux');
var ReduxShareServer = require('redux-share-server');

var config = { debug: true, repeaterMode: false };
var reduxShare = new ReduxShareServer(server, config);
var reduxShareMW = reduxShare.getReduxMiddleware();
var reducers = require('../shared/reducers/root-reducer');
var store = redux.createStore(reducers, redux.applyMiddleware(reduxShareMW));

var publicDir = path.join(__dirname, '..', 'public');

app.use('/public', express.static(publicDir));

app.get('/', function(req, res) {
  res.sendFile(path.join(publicDir, 'index.html'));
});

//app.use('/redux', reduxShareMW);

store.dispatch({ type:"@@SERVER-LISTEN-START" });

server.listen(3000, function() {
  console.log('Listening on port 3000!')
});
