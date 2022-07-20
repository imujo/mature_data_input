import React from "react";
import { Navigate } from "react-router-dom";

function PrivateRoute({ to, children }) {
  const isAuthenticated = localStorage.getItem("isAuth");

  let condition = isAuthenticated === "true";

  if (condition) {
    return children;
  }

  return <Navigate to={to} replace />;
}

export default PrivateRoute;
