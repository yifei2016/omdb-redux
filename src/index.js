import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware, compose } from 'redux';
import { apiMiddleware } from 'redux-api-middleware';
import {Provider} from 'react-redux';
import { reducers, initialState} from 'redux/reducers';
import './sass/index.css';
import {searchEpisodeApiMiddleware, loggingMiddleware} from 'middleware';

import App from "./App";
const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

const createStoreWithMiddleware = applyMiddleware(apiMiddleware)(createStore);

const store = createStoreWithMiddleware(reducers, initialState);

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
