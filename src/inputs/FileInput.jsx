import React, { useState } from "react";
import { Form } from "react-bootstrap";

export default function FileInput({ title, value, setValue, type }) {
  const handleFileInput = (e) => {
    console.log(e.target.files[0]);
    const formData = new FormData();
    formData.append("my-image-file", e.target.files[0], e.target.files[0].name);
    setValue(formData);
  };

  return (
    <Form.Group className="mb-3 z_item" controlId="formBasicEmail">
      <Form.Label>{title}</Form.Label>
      <input type="file" accept={type} onChange={handleFileInput} />
    </Form.Group>
  );
}
