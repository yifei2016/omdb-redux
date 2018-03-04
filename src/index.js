

import React from "react";
import ReactDOM from "react-dom";
import {createStore, compose} from 'redux';
import {Provider} from 'react-redux';
import reducer from 'redux/reducers';

import App from "./App";
const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

const store = createStore(reducer, enhancers);
ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById("root")
)
