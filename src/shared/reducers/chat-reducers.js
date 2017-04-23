var chatActions = require('../actions/chat-actions');

module.exports.messages = function(state = [], action) {
  switch(action.type) {
    case chatActions.NEW_MESSAGE:
      return [...state, action.payload];
    default:
      return state;
  }
}
