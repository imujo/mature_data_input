import React from "react";
import { Form } from "react-bootstrap";

export default function BrojZadatka({ title, value, setValue }) {
  return (
    <Form.Group className="mb-3 z_item" controlId="formBasicEmail">
      <Form.Label>{title}</Form.Label>
      <Form.Control
        step="0.1"
        type="number"
        className="z_broj"
        placeholder="Broj"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <p className="napomena">
        Ako je zadatak primjer, stavi mu broj za 0.1 manje od broja iduceg
        zadatka (npr iduci zadatak je 19, neka je ovaj 18,9)
      </p>
    </Form.Group>
  );
}
