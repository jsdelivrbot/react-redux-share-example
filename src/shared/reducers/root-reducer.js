var combineReducers = require('redux').combineReducers;

var messages = require('./chat-reducers').messages;

module.exports = combineReducers({ 'messages': messages });
