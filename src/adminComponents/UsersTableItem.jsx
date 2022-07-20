import React, { useState } from "react";
import { useEffect } from "react";
import { Button } from "react-bootstrap";
import {
  deleteUser,
  getUserTypeFromId,
  getUserTypes,
  updateUserType,
} from "../functions/AdminFunctions";
import DropdownComponent from "../inputs/DropdownComponent";
import useDidMount from "../useDidMount";

export default function UsersTableItem({
  user,
  updateTable,
  setItemSelected,
  itemSelected,
  i,
}) {
  const [types, setTypes] = useState([]);
  const [userType, setUserType] = useState(0);
  const [userTypeId] = useState(user.type ? user.type : 0);

  useEffect(() => {
    getUserTypes().then((data) => {
      setTypes(data);
    });
    getUserTypeFromId(userTypeId).then((data) => setUserType(data));
  }, []);

  useDidMount(() => {
    updateUserType(user.id, userType);
  }, [userType]);

  const delUser = () => {
    deleteUser(user.id).then(() => updateTable());
  };

  return (
    <div
      className={`users_table_item ${
        itemSelected === i ? "user_table_item_selected" : ""
      }`}
    >
      <div className={`table_item_box `}>{user.id}</div>
      <div className={`table_item_box `}>{user.username}</div>
      <div className={`table_item_box `}>{user.firstname}</div>
      <div className={`table_item_box `}>{user.lastname}</div>

      <div className="table_item_box">
        <DropdownComponent
          options={types}
          option={userType}
          setOption={setUserType}
          clearData={() => {}}
        />
      </div>
      <div className="table_item_box">
        <Button variant="primary" onClick={() => setItemSelected(i)}>
          Select
        </Button>
      </div>
      <div className="table_item_box">
        <Button variant="danger" onClick={delUser}>
          Delete
        </Button>
      </div>
    </div>
  );
}
