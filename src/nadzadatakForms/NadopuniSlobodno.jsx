import React, { useEffect, useState } from 'react'
import TextBox from '../inputs/TextBox'
import TextArea from '../inputs/TextArea'

export default function NadopuniSlobodno({value, setValue}) {

  const [naslov, setNaslov] = useState(value ? value.naslov : '')
  const [tekst, setTekst] = useState(value ? value.tekst : '')

  useEffect(() => {
    setValue({
      naslov: naslov,
      tekst: tekst
    })
  }, [tekst, naslov])
  

  return (
    <>

      <TextBox title="Naslov" value={naslov} setValue={setNaslov} />

      <TextArea title="Tekst" value={tekst} setValue={setTekst} />

      <p className='napomena'>NAPOMENA: Zamijeni npr. (19)____ sa <span className='bold'> %%19%%</span></p>



    </>
  )
}