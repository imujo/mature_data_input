import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { getUser, logout } from "./functions/AuthFunctions";
import { isAuth } from "./functions/AuthFunctions";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Nav() {
  const navigate = useNavigate();
  const [user, setUser] = useState({ firstname: "", lastname: "" });

  useEffect(() => {
    getUser().then((user) => {
      if (user) {
        setUser(user);
      }
    });
  }, []);

  return (
    <nav>
      <p>{`${user.firstname} ${user.lastname}`}</p>
      {isAuth() ? (
        <Button variant="primary" onClick={logout}>
          Log out
        </Button>
      ) : (
        <Button
          variant="primary"
          onClick={() => {
            navigate("/login");
            navigate(0);
          }}
        >
          Log in
        </Button>
      )}
    </nav>
  );
}
