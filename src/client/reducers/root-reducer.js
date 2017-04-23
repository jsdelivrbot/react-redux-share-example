import { combineReducers } from 'redux';

import { messages } from './chat-reducers';

const rootReducer = combineReducers({ messages });

export default rootReducer;
