import React, { useState } from "react";
import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { isAdmin } from "../functions/AuthFunctions";

function AdminRoute({ to, children }) {
  const isAuthenticated = localStorage.getItem("isAuth");

  const [returned, setReturned] = useState(<></>);

  useEffect(() => {
    isAdmin().then((isadmin) => {
      let condition = isAuthenticated === "true" && isadmin;

      if (condition) {
        return setReturned(children);
      }

      return setReturned(<Navigate to={to} replace />);
    });
  }, []);

  return returned;
}

export default AdminRoute;
