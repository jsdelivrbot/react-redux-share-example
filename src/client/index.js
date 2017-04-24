console.log("Hello World!");

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import SyncReduxClient from 'redux-share-client';

import App from './components/app';

import reducers from '../shared/reducers/root-reducer';

const createStoreWithMW = applyMiddleware()(createStore);
const store = createStoreWithMW(reducers);

ReactDOM.render(
  <Provider store={ store }>
    <App/>
  </Provider>
, document.getElementById('root'));
