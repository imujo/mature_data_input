import React from 'react'
import { Form } from 'react-bootstrap'


export default function CheckBox({title, value, setValue}) {
  return (
    <Form.Group className="mb-3 z_item" controlId="formBasicEmail">
        <Form.Label>{title}</Form.Label>
        <Form.Check type="checkbox" value={value} onChange={e => setValue(e.target.value)} />
    </Form.Group>

  )
}
