import React from 'react'
import { Form } from 'react-bootstrap'


export default function FileInput({ title, value, setValue, type}) {
  return (
    <Form.Group className="mb-3 z_item" controlId="formBasicEmail">
        <Form.Label>{title}</Form.Label>
        <input type="file" 
        onChange={e=>setValue(e.target.value)}
        value={value}
        // accept="image/jpeg, image/png"
        accept={type}
        />
    </Form.Group>
  )
}
