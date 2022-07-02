import React from 'react'
import { Form } from 'react-bootstrap'


export default function TextArea({title, value, setValue}) {
  return (
    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>{title}</Form.Label>
            <Form.Control className='z_textarea' placeholder={title} as="textarea" rows={3}
            value={value}
            onChange={e=> setValue(e.target.value)}
            />
    </Form.Group>
  )
}
