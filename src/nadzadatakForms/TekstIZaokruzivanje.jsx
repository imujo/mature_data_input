import React, { useState } from 'react'
import TextBox from '../inputs/TextBox'
import TextArea from '../inputs/TextArea'


export default function TekstIZaokruzivanje() {

  const [naslov, setNaslov] = useState('')
  const [tekst, setTekst] = useState('')
  const [footnote, setFootnote] = useState('')

  return (
    <>

      <TextBox title="Naslov" value={naslov} setValue={setNaslov} />

      

 

      <TextArea title="Tekst" value={tekst} setValue={setTekst} />

      <p className='napomena'>NAPOMENA: oko boldanih rijeci stavi znakove **<span>primjer</span>**</p>


      <TextArea title="Footnote" value={footnote} setValue={setFootnote} />
    </>
  )
}