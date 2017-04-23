import * as chatActions from '../actions/chat-actions';

export function messages(state = [], action) {
  switch(action.type) {
    case chatActions.NEW_MESSAGE:
      return [...state, action.payload];
    default:
      return state;
  }
}
