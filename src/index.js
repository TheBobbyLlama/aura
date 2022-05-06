import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";

import App from "./App";
import Login from "./components/Login/LoginPage";
import Reset from "./components/Reset/Reset";
<<<<<<< HEAD
=======
import Dashboard from "./components/Dashboard/Dashboard";
>>>>>>> 3e9cbdf75d29ead5c284a79f432fce2f2f9f67e5

import "./index.scss";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="" element={<Login />} />
            <Route path="reset" element={<Reset />} />
<<<<<<< HEAD
=======
            <Route path="dashboard" element={<Dashboard />} />
>>>>>>> 3e9cbdf75d29ead5c284a79f432fce2f2f9f67e5
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
