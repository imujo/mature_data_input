import React from 'react'
import Form from 'react-bootstrap/Form'

export default function Rjesenje({index, removeRjesenje, vrsta}) {




  return (
    <Form className='rjesenjeDiv'>
        <button className="close close_rjesenje" onClick={()=>removeRjesenje(index)}>x</button>


        {
          vrsta === 'zaokruzivanje' ?
            <Form.Group className="mb-3 z_item" controlId="formBasicEmail">
                <Form.Label>Slovo</Form.Label>
                <Form.Control maxLength={1} type="text" className='z_tekst' placeholder="Tekst zadatka" />
            </Form.Group>
            : null
        }
        <Form.Group className="mb-3 z_item" controlId="formBasicEmail">
            <Form.Label>Tekst rjesenja</Form.Label>
            <Form.Control type="text" className='z_tekst' placeholder="Tekst zadatka" />
        </Form.Group>
        {
          vrsta === 'zaokruzivanje' ?
            <Form.Group className="mb-3 z_item" controlId="formBasicEmail">
                <Form.Label>Je li tocno?</Form.Label>
                <Form.Check type="checkbox" />
            </Form.Group>
            : null
        }

        {
          vrsta === 'dugi odgovor' ?
          <Form.Group className="mb-3 z_item" controlId="formBasicEmail">
              <Form.Label>Broj bodova</Form.Label>
              <Form.Control type="number" className='z_broj' placeholder="Broj" />
          </Form.Group>
          :
          null

        }
        
        {
          vrsta === 'kratki odgovor' || vrsta === 'dugi odgovor' ?

          <Form.Group className="mb-3 z_item" controlId="formBasicEmail">
              <Form.Label>Slika</Form.Label>
            <input type="file" name="slika" id="slika" />
          </Form.Group>

          : null

        }

    </Form>
  )
}
