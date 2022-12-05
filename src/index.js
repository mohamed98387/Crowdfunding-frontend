import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import App from "./App";
import SignupWithRouter from "./component/Signin/Signin"
import reducers from "./reducer"
import './index.css'

import { Provider } from "react-redux";

let createStorewithMiddleware = applyMiddleware(thunkMiddleware)(createStore)
let store= createStorewithMiddleware(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() );


ReactDOM.render(
  <Provider store={store}>
   
    <App />
  
  </Provider>,
  document.getElementById("root")
);
