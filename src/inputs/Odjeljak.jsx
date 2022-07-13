import React from "react";
import Form from "react-bootstrap/Form";
import DropdownComponent from "../DropdownComponent";

export default function Odjeljak({ options, option, setOption }) {
  return (
    <Form.Group className="mb-3 z_item">
      <Form.Label>Odjeljak</Form.Label>
      <DropdownComponent
        options={options}
        option={option}
        optionName={"odjeljak"}
        setOption={setOption}
        clearData={() => {}}
      ></DropdownComponent>
      <Form.Text className="text-muted"></Form.Text>
    </Form.Group>
  );
}
