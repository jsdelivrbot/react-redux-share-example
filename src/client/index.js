import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/app';
import rootReducer from './reducers/root-reducer';

const createStoreWithMiddleware = applyMiddleware()(createStore)
const store = createStoreWithMiddleware(rootReducer);

ReactDOM.render(
  <Provider store={ store }>
    <App/>
  </Provider>
, document.getElementById('root'));
