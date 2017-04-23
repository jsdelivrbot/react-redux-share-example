var  NEW_MESSAGE = 'NEW_MESSAGE';

var sendMessage = function(text) {
  const payload = { text, timestamp: Date.now() };
  return { type: NEW_MESSAGE, payload };
}

module.exports = { NEW_MESSAGE: NEW_MESSAGE, 'sendMessage': sendMessage };
