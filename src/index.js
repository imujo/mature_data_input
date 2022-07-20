import React from "react";
import ReactDOM from "react-dom/client";
import "./css/zadatak.css";
import "./css/index.css";
import Login from "./pages/Login";
import PrivateRoute from "./privateRoutes/PrivateRoute";
import Nav from "./Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./pages/App";
import Matura from "./pages/Matura";
import "bootstrap/dist/css/bootstrap.min.css";
import AdminRoute from "./privateRoutes/AdminRoute";
import Admin from "./pages/Admin";
import "./css/admin.css";
import Register from "./pages/Register";

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
