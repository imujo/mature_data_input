import React, { useEffect, useState } from "react";
import "./App.css";
import { Link } from "react-router-dom";
import { isAdmin } from "./AuthFunctions";

function App() {
  const [admin, setAdmin] = useState(false);

  useEffect(() => {
    isAdmin().then((data) => setAdmin(data));
  }, []);

  return (
    <div className="App">
      <Link to="/matura">Nova Matura</Link>

      {admin ? (
        <>
          <Link to="/admin">Admin</Link>
          <Link to="/register">Register</Link>
        </>
      ) : null}
    </div>
  );
}
export default App;
