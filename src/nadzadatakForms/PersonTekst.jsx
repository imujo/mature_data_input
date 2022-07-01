import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'


export default function PersonTekst({index, removeOsoba}) {

    const [tekst, setTekst] = useState('')
    const [ime, setIme] = useState('')
  return (
    <div className='personTekst border_bottom'>
        <button className="close close_rjesenje" onClick={()=>removeOsoba(index)}>x</button>

        <Form.Group className="mb-3 z_item" controlId="formBasicEmail">
                <Form.Label>Slovo</Form.Label>
                <Form.Control maxLength={1} type="text" className='z_tekst' placeholder="Slovo" />
        </Form.Group>

        <Form.Group className="mb-3 z_item" controlId="formBasicEmail">
            <Form.Label>Ime</Form.Label>
            <Form.Control type="text" className='z_tekst' placeholder="Ime"
            onChange={e=>setIme(e.target.value)}
            value={ime}
            />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Tekst</Form.Label>
            <Form.Control className='z_textarea' as="textarea" rows={3}
            value={tekst}
            onChange={e=> setTekst(e.target.value)}
            />
        </Form.Group>   
    </div>
  )
}
