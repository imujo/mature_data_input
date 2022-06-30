import React from 'react'
import Form from 'react-bootstrap/Form'


export default function ZaokruzivanjeForm() {
  return (
    <div>
        <Form.Group className="mb-3 z_item" controlId="formBasicEmail">
            <Form.Label>Broj zadatka</Form.Label>
            <Form.Control type="number" className='z_broj' placeholder="Broj" />
        </Form.Group>

        <Form.Group className="mb-3 z_item" controlId="formBasicEmail">
            <Form.Label>Tekst zadatka</Form.Label>
            <Form.Control type="number" className='z_broj' placeholder="Broj" />
        </Form.Group>
    </div>
  )
}
