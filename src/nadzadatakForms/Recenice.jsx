import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'



export default function Recenice({index, removeOsoba}) {

    const [slovo, setSlovo] = useState('')
    const [Recenica, setRecenica] = useState('')


    
  return (
    <div className='recenice border_bottom'>
        <button className="close close_rjesenje" onClick={()=>removeOsoba(index)}>x</button>

        <Form.Group className="mb-3 z_item" controlId="formBasicEmail">
                <Form.Label>Slovo</Form.Label>
                <Form.Control maxLength={1} type="text" className='z_tekst' placeholder="Slovo" value={slovo} onChange={e=> setSlovo(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3 z_item" controlId="formBasicEmail">
            <Form.Label>Recenica</Form.Label>
            <Form.Control type="text" className='z_tekst' placeholder="Recenica"
            onChange={e=>setRecenica(e.target.value)}
            value={Recenica}
            />
        </Form.Group>

        <Form.Group className="mb-3 z_item" controlId="formBasicEmail">
            <Form.Label>Je li primjer?</Form.Label>
            <Form.Check type="checkbox" />
        </Form.Group>
    </div>
  )
}
