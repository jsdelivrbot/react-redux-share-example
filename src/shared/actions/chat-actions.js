var  NEW_MESSAGE = 'NEW_MESSAGE';

var sendMessage = function(text) {
  var payload = { text: text, timestamp: Date.now() };
  return { type: NEW_MESSAGE, payload: payload };
}

module.exports = { NEW_MESSAGE: NEW_MESSAGE, 'sendMessage': sendMessage };
