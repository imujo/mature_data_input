import React from 'react'
import { Form } from 'react-bootstrap'



export default function TextBox({title, value, setValue}) {
  return (
    <Form.Group className="mb-3 z_item" controlId="formBasicEmail">
            <Form.Label>{title}</Form.Label>
            <Form.Control type="text" className='z_tekst' placeholder={title}
            onChange={e=>setValue(e.target.value)}
            value={value}
            />
    </Form.Group>
  )
}
