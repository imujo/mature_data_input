import React, { useState } from "react";
import UsersTableItem from "./UsersTableItem";

export default function UsersTable({
  users,
  updateTable,
  itemSelected,
  setItemSelected,
}) {
  return (
    <div>
      <div className="users_table_item">
        <div className={`table_item_box bold`}>Id</div>
        <div className={`table_item_box bold`}>Username</div>
        <div className={`table_item_box bold`}>First name</div>
        <div className={`table_item_box bold`}>Last name</div>
        <div className={`table_item_box bold`}>Type</div>
      </div>
      {users.map((user, i) => {
        return (
          <UsersTableItem
            user={user}
            key={i}
            updateTable={updateTable}
            setItemSelected={setItemSelected}
            itemSelected={itemSelected}
            i={i}
          />
        );
      })}
    </div>
  );
}
