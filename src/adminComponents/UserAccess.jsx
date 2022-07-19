import React, { useState } from "react";
import { useEffect } from "react";
import { Button } from "react-bootstrap";
import { addCondition, getUserAccessConditions } from "../AdminFunctions";
import Condition from "./Condition";

export default function UserAccess({ user, itemSelected }) {
  const [conditions, setConditions] = useState([]);

  const updateConditionList = () => {
    getUserAccessConditions(user.id).then(setConditions);
  };

  const addCond = () => {
    addCondition(user.id).then(updateConditionList);
  };

  useEffect(() => {
    updateConditionList();
  }, [itemSelected]);

  return (
    <div>
      <h2>Conditions</h2>
      {conditions.map((item, i) => {
        return (
          <Condition
            key={i}
            condition_data={item}
            updateConditionList={updateConditionList}
          />
        );
      })}
      <Button variant="primary" onClick={addCond}>
        Add Condition
      </Button>
    </div>
  );
}
