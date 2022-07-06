import React from "react";
import Form from "react-bootstrap/Form";
import DropdownComponent from "../DropdownComponent";

export default function VrstaZadatka({
  vrstaOptions,
  vrsta,
  setVrsta,
  clearData,
}) {
  return (
    <Form.Group className="mb-3 z_item" controlId="formBasicEmail">
      <Form.Label>Vrsta zadatka</Form.Label>
      <DropdownComponent
        options={vrstaOptions}
        option={vrsta}
        optionName={"vrsta"}
        setOption={setVrsta}
        clearData={clearData ? clearData : null}
      ></DropdownComponent>
      <Form.Text className="text-muted"></Form.Text>
    </Form.Group>
  );
}
