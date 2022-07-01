import Form from 'react-bootstrap/Form'
import React, { useState } from 'react'

export default function NadopuniSlobodno() {

  const [naslov, setNaslov] = useState('')
  const [tekst, setTekst] = useState('')

  return (
    <>

      <Form.Group className="mb-3 z_item" controlId="formBasicEmail">
            <Form.Label>Naslov</Form.Label>
            <Form.Control type="text" className='z_tekst' placeholder="Naslov"
            onChange={e=>setNaslov(e.target.value)}
            value={naslov}
            />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Tekst</Form.Label>
            <Form.Control className='z_textarea' as="textarea" rows={3} placeholder='Tekst'
            value={tekst}
            onChange={e=> setTekst(e.target.value)}
            />
      </Form.Group>

      <p className='napomena'>NAPOMENA: Zamijeni npr. (19)____ sa <span className='bold'> %%19%%</span></p>



    </>
  )
}