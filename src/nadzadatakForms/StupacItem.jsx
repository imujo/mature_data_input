import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'


export default function StupacItem({index, removeStupacItem}) {

  const [slovoBroj, setSlovoBroj] = useState('')
  const [recenica, setRecenica] = useState('')

  return (
    <div className='stupacItem'>
      <button className="close close_rjesenje" onClick={()=>removeStupacItem(index)}>x</button>

      <Form.Group className="mb-3 z_item" controlId="formBasicEmail">
              <Form.Label>Slovo/Broj</Form.Label>
              <Form.Control maxLength={1} type="text" className='z_tekst' placeholder="Slovo/Broj" value={slovoBroj} onChange={e=>setSlovoBroj(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3 z_item" controlId="formBasicEmail">
          <Form.Label>Recenica</Form.Label>
          <Form.Control type="text" className='z_tekst' placeholder="Recenica"
          onChange={e=>setRecenica(e.target.value)}
          value={recenica}
          />
      </Form.Group>

    </div>
  )
}
