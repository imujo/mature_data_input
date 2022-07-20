import Button from "react-bootstrap/Button";
import React from "react";
import { Form } from "react-bootstrap";
import { deleteFile } from "../functions/ServerFunctions";

export default function FileInput({
  title,
  value,
  setValue,
  type,
  filePath,
  table,
  table_id,
  deleteType,
  updateZadatci,
}) {
  const handleFileInput = (e) => {
    const formData = new FormData();
    formData.append("file", e.target.files[0], e.target.files[0].name);
    setValue(formData);
  };

  return (
    <>
      <Form.Group className="mb-3 z_item" controlId="formBasicEmail">
        <Form.Label>{title}</Form.Label>
        <input
          type="file"
          accept={type}
          onChange={handleFileInput}
          name="file"
        />
      </Form.Group>
      <p>File: {filePath ? filePath : "No file in database"}</p>
      {type.includes("image") && filePath ? (
        <>
          <img
            src={`http://localhost:3001/${filePath}`.replace("uploads/", "")}
            className="fileImage"
            alt="file"
          />
          <Button
            variant="danger"
            onClick={() => {
              deleteFile(table, table_id, deleteType).then(() =>
                updateZadatci()
              );
              setValue("");
            }}
          >
            Delete Slika
          </Button>
        </>
      ) : null}

      {type.includes("audio") && filePath ? (
        <>
          <Button
            variant="danger"
            onClick={() => {
              deleteFile(table, table_id, deleteType).then(() =>
                updateZadatci()
              );
              setValue("");
            }}
          >
            Delete Audio
          </Button>
        </>
      ) : null}
    </>
  );
}
