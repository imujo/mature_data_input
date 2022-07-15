import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./zadatak.css";
import Login from "./Login";
import PrivateRoute from "./PrivateRoute";
import Nav from "./Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Matura from "./Matura";
import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Nav />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="login" element={<Login />} />
      {/* <PrivateRoute path="matura" elemetn={<Matura />} /> */}
      <Route
        path="matura"
        element={
          <PrivateRoute admin to="/login">
            <Matura />
          </PrivateRoute>
        }
      />
    </Routes>
  </BrowserRouter>
);
