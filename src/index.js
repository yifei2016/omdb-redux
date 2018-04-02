import React from "react";
import ReactDOM from "react-dom";

import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { reducers, initialState} from 'redux/reducers';

import thunkMiddleware from 'redux-thunk';
import { apiMiddleware } from 'redux-api-middleware';
import {loggingMiddleware} from 'middleware';

import './sass/index.css';
import App from "./App";

const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

const store = createStore(
  reducers,
  initialState,
  applyMiddleware( loggingMiddleware, thunkMiddleware, apiMiddleware),
  enhancers
);
// const store = createStore(
//   reducers,
//   initialState,
//   applyMiddleware(
//     loggingMiddleware,
//     searchEpisodeApiMiddleware
//   ),
//   enhancers
// );


ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById("root")
)
