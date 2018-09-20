import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers/index";

import Search from "./containers/Search";
import ZipList from "./containers/ZipList";
import Alert from "./containers/Alert";
import "./styles.css";

const store = createStore(reducers, applyMiddleware(thunk));

const App = () => (
  <Provider store={store}>
    <div className="App">
      <Search />
      <ZipList />
      <Alert />
    </div>
  </Provider>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
