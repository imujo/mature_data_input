import React, { useState } from 'react'
import Recenice from './Recenice'
import Button from 'react-bootstrap/Button'
import TextBox from '../inputs/TextBox'
import TextArea from '../inputs/TextArea'


export default function NadopuniIzbor({value, setValue}) {

  const [naslov, setNaslov] = useState(value ? value.naslov : '')
  const [tekst, setTekst] = useState(value ? value.tekst : '')

  const [receniceList, setreceniceList] = useState(value ? value.pitanja : [])
  const [receniceListIndex, setreceniceListIndex] = useState(0)

  function onAddRecenica(){
    console.log(receniceList)
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

      {receniceList.map((item, i)=> {
        return <Recenice 
          key={i} 
          index={i} 
          removeOsoba={onRemoveRecenica} 
          slovo_db={item.slovo}
          recenica_db={item.recenica}
          primjer_db={item.primjer}
        />})}

      <Button 
          variant="danger" 
          onClick={onAddRecenica}
          >Dodaj recenicu
      </Button>
    </>
  )
}
