import React, { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form'



export default function DugiOdgovorForm({setValue}) {

    const [tekst, setTekst] = useState('')

    useEffect(() => {
        setValue({
            tekst: tekst
        })
    }, [tekst])
    

  return (
    <>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Tekst</Form.Label>
            <Form.Control className='z_textarea' as="textarea" rows={3}
            value={tekst}
            onChange={e=> setTekst(e.target.value)}
            />
          </Form.Group>
    </>
  )
}
