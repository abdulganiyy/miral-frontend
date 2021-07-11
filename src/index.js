import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import realestate from "./redux/reducers/realestate";
import automobile from "./redux/reducers/automobile";

import thunk from "redux-thunk";

const rootReducer = combineReducers({
  realestate: realestate,
  automobile: automobile,
});

const combineEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  combineEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
