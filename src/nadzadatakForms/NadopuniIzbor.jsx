import React, { useState } from 'react'
import Recenice from './Recenice'
import Button from 'react-bootstrap/Button'
import TextBox from '../inputs/TextBox'
import TextArea from '../inputs/TextArea'


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
      
      <TextBox title="Naslov" value={naslov} setValue={setNaslov} />

      <TextArea title="Tekst" value={tekst} setValue={setTekst} />

      
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
