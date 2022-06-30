import React, { useEffect, useState } from 'react'
import DropdownComponent from './DropdownComponent'
import Form from 'react-bootstrap/Form'
import ZaokruzivanjeForm from './ZaokruzivanjeForm'

export default function Zadatak() {

    
    const vrstaOptions = ['zaokruzivanje', 'kratki odgovor']
    const [vrsta, setVrsta] = useState('')

    useEffect(() => {
      console.log(vrsta)
    }, [vrsta])
    


  return (
    <Form className='zadatakDiv'>
        <h2>Zadatak</h2>

        <Form.Group className="mb-3 z_item" controlId="formBasicEmail">
            <Form.Label>Broj zadatka</Form.Label>
            <DropdownComponent options={vrstaOptions} option={vrsta} optionName={'vrsta'} setOption={setVrsta} ></DropdownComponent>
            <Form.Text className="text-muted">
            </Form.Text>
        </Form.Group>
        
        {
            vrsta === 'zaokruzivanje' ? 
            <ZaokruzivanjeForm></ZaokruzivanjeForm>
            :
            null
        }
    </Form>
  )
}
