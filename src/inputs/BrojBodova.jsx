import React from 'react'
import { Form } from 'react-bootstrap'


export default function BrojBodova({brojBodova, setBrojBodova}) {
  return (
    <Form.Group className="mb-3 z_item" controlId="formBasicEmail">
        <Form.Label>Broj bodova</Form.Label>
        <Form.Control  type="number" className='z_broj' placeholder="Broj"
        onChange={e=>setBrojBodova(e.target.value)}
        value={brojBodova}
        />
    </Form.Group>
  )
}
