import React from 'react'
import { Form } from 'react-bootstrap'


export default function BrojBodova({value, setValue}) {
  return (
    <Form.Group className="mb-3 z_item" controlId="formBasicEmail">
        <Form.Label>Broj bodova</Form.Label>
        <Form.Control  type="number" className='z_broj' placeholder="Broj"
        onChange={e=>setValue(e.target.value)}
        value={value}
        />
    </Form.Group>
  )
}
