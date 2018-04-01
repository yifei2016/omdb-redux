import React from "react";
import ReactDOM from "react-dom";
import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import { reducers, initialState} from 'redux/reducers';
import './sass/index.css';
import { apiMiddleware } from 'searchShow/api.js';

import App from "./App";
const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

const loggingMiddleware = (store) => (next) => (action) => {
  console.log(`redux log:`, action);
  return next(action);
}

const store = createStore(
  reducers,
  initialState,
  applyMiddleware(
    loggingMiddleware,
    apiMiddleware
  ),
  enhancers
);


ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById("root")
)
