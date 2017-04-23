var createStore = require('redux').createStore;
var applyMiddleware = require('redux').applyMiddleware;

var rootReducer = require('./reducers/root-reducer');

var createStoreWithMiddleware = applyMiddleware()(createStore)
var store = createStoreWithMiddleware(rootReducer);

module.exports = store;
