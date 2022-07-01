import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Recenice from './Recenice'
import Button from 'react-bootstrap/Button'


export default function NadopuniIzbor() {

  const [naslov, setNaslov] = useState('')
  const [tekst, setTekst] = useState('')

  const [receniceList, setreceniceList] = useState([])
  const [receniceListIndex, setreceniceListIndex] = useState(0)

  function onAddRecenica(){
    setreceniceList(receniceList.concat(receniceListIndex))
    setreceniceListIndex(receniceListIndex+1)
  }

  function onRemoveRecenica(i){
    setreceniceList(zadatci => zadatci.filter((item, _) => item !== i))
  }
  
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
      <br />

      {receniceList.map((item, i)=> {return <Recenice key={item} index={item} removeOsoba={onRemoveRecenica} />})}

      <Button 
          variant="danger" 
          onClick={onAddRecenica}
          >Dodaj recenicu
      </Button>
    </>
  )
}
