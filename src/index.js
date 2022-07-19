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
import AdminRoute from "./AdminRoute";
import Admin from "./Admin";
import "./admin.css";
import Register from "./Register";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Nav />
    <Routes>
      <Route path="login" element={<Login />} />

      <Route
        path="matura"
        element={
          <PrivateRoute to="/login">
            <Matura />
          </PrivateRoute>
        }
      />

      <Route
        path="admin"
        element={
          <AdminRoute to="/login">
            <Admin />
          </AdminRoute>
        }
      />

      <Route
        path="register"
        element={
          <AdminRoute to="/login">
            <Register />
          </AdminRoute>
        }
      />

      <Route
        path="*"
        element={
          <PrivateRoute to="/login">
            <App />
          </PrivateRoute>
        }
      />
    </Routes>
  </BrowserRouter>
);
