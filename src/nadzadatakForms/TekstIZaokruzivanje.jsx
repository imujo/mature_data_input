import Form from 'react-bootstrap/Form'
import React, { useState } from 'react'

export default function TekstIZaokruzivanje() {

  const [naslov, setNaslov] = useState('')
  const [tekst, setTekst] = useState('')
  const [footnote, setFootnote] = useState('')

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

      <p className='napomena'>NAPOMENA: oko boldanih rijeci stavi znakove **<span>primjer</span>**</p>

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Footnote (znacenje rijeci)</Form.Label>
            <Form.Control className='z_textarea' as="textarea" rows={3} placeholder='Footnote'
            value={footnote}
            onChange={e=> setFootnote(e.target.value)}
            />
      </Form.Group>
    </>
  )
}