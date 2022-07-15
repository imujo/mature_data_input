import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { getUser, logout } from "./AuthFunctions";
import { isAuth } from "./AuthFunctions";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Nav() {
  const navigate = useNavigate();
  const [user, setUser] = useState({ firstname: "", lastname: "" });
  useEffect(() => {
    getUser().then((user) => setUser(user));
  }, []);

  return (
    <nav>
      <p>{`${user.firstname} ${user.lastname}`}</p>
      {isAuth() ? (
        <Button variant="primary" onClick={logout}>
          Log out
        </Button>
      ) : (
        <Button variant="primary" onClick={() => navigate("/login")}>
          Log in
        </Button>
      )}
    </nav>
  );
}
