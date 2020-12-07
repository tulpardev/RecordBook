import React from "react";
import ReactDOM from "react-dom";
import App from "./components/root/App";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import configureStore from "./redux/configuration/configureStore";
import { BrowserRouter } from "react-router-dom";

const store = configureStore();
ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
