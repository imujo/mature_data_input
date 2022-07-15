import React, { useState } from "react";
import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { isAdmin } from "./AuthFunctions";

function PrivateRoute({ to, admin, children }) {
  const isAuthenticated = localStorage.getItem("isAuth");

  const [returned, setReturned] = useState(<></>);

  useEffect(() => {
    let condition = isAuthenticated === "true";

    if (admin) {
      isAdmin().then((isadmin) => {
        condition = isAuthenticated === "true" && isadmin;
        if (condition) {
          return setReturned(children);
        }

        return setReturned(<Navigate to={to} replace />);
      });
    }
  }, []);

  return returned;
}

export default PrivateRoute;
