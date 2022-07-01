import React, { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form'


export default function KratkiOdgovorForm({setValue}) {

    const [tekst, setTekst] = useState('')

    useEffect(() => {
      
        setValue({
            tekst: tekst
        })
      
    }, [tekst])
    
  return (
    <>
        <Form.Group className="mb-3 z_item" controlId="formBasicEmail">
            <Form.Label>Tekst zadatka</Form.Label>
            <Form.Control type="text" className='z_tekst' placeholder="Tekst zadatka"
            onChange={e=>setTekst(e.target.value)}
            value={tekst}
            />
        </Form.Group>
    </>
  )
}
