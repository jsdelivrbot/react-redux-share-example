import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import * as redux from 'redux';
import ReduxShareClient from 'redux-share-client';

import App from './components/app';

import reducers from '../shared/reducers/root-reducer';

const reduxShare = new ReduxShareClient('ws://localhost:3000');
const reduxShareMW = reduxShare.getReduxMiddleware();

const store = redux.createStore(reducers, redux.applyMiddleware(reduxShareMW));

store.dispatch({ type:"@@SYNC-CONNECT-SERVER-START" });

ReactDOM.render(
  <Provider store={ store }>
    <App/>
  </Provider>
, document.getElementById('root'));
