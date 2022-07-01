import React, { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form'

export default function ZaokruzivanjeForm({ setValue}) {

  const [tekst, setTekst] = useState('')
  const [citat, setCitat] = useState('')


  useEffect(() => {
    
    let text = {
      tekst: tekst,
      citat: citat
    }

    setValue(text)

  }, [
    tekst, citat
  ])
  


  return (
    <>
        

        <Form.Group className="mb-3 z_item" controlId="formBasicEmail">
            <Form.Label>Tekst zadatka</Form.Label>
            <Form.Control type="text" className='z_tekst' placeholder="Tekst zadatka"
            onChange={e=> setTekst(e.target.value)}
            value={tekst}
            />
        </Form.Group>
        <Form.Group className="mb-3 z_item" controlId="formBasicEmail">
            <Form.Label>Citat</Form.Label>
            <Form.Control type="text" className='z_tekst' placeholder="Citat" 
            onChange={e=>setCitat(e.target.value)}
            value={citat}
            />
        </Form.Group>
        
        <Form.Group className="mb-3 z_item" controlId="formBasicEmail">
            <Form.Label>Je li primjer?</Form.Label>
            <Form.Check type="checkbox" />
        </Form.Group>
    </>
  )
}
