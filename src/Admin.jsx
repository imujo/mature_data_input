import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import UserAccess from "./adminComponents/UserAccess";
import UsersTable from "./adminComponents/UsersTable";
import { getUsers } from "./AdminFunctions";

export default function Admin() {
  const [users, setUsers] = useState([]);
  const [itemSelected, setItemSelected] = useState(-1);

  const navigate = useNavigate();

  const updateTable = () => {
    getUsers().then((data) => {
      setUsers(data);
    });
  };

  useEffect(() => {
    updateTable();
  }, []);

  const navigateToRegister = () => {
    navigate("/register");
    navigate(0);
  };

  return (
    <main>
      <h1>Admin</h1>
      <UsersTable
        users={users}
        updateTable={updateTable}
        itemSelected={itemSelected}
        setItemSelected={setItemSelected}
      />
      <Button variant="primary" onClick={navigateToRegister}>
        Add User
      </Button>

      {itemSelected == -1 ? null : (
        <UserAccess user={users[itemSelected]} itemSelected={itemSelected} />
      )}
    </main>
  );
}
