import React, { useState } from 'react'
import Slovo from '../inputs/Slovo'
import TextBox from '../inputs/TextBox'
import TextArea from '../inputs/TextArea'

export default function PersonTekst({index, removeOsoba}) {

    const [tekst, setTekst] = useState('')
    const [ime, setIme] = useState('')
    const [slovo, setSlovo] = useState('')
  return (
    <div className='personTekst border_bottom'>
        <button className="close close_rjesenje" onClick={()=>removeOsoba(index)}>x</button>


        <Slovo title="Slovo" value={slovo} setValue={setSlovo} />

        <TextBox title="Ime" value={ime} setValue={setIme} />

        <TextArea title="Tekst" value={tekst} setValue={setTekst} />

    </div>
  )
}
