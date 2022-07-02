import React, { useState } from 'react'
import TextBox from '../inputs/TextBox'
import TextArea from '../inputs/TextArea'

export default function NadopuniSlobodno() {

  const [naslov, setNaslov] = useState('')
  const [tekst, setTekst] = useState('')

  return (
    <>

      <TextBox title="Naslov" value={naslov} setValue={setNaslov} />

      <TextArea title="Tekst" value={tekst} setValue={setTekst} />

      <p className='napomena'>NAPOMENA: Zamijeni npr. (19)____ sa <span className='bold'> %%19%%</span></p>



    </>
  )
}