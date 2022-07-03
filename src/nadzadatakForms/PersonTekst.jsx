import React, { useState, useEffect } from 'react'
import Slovo from '../inputs/Slovo'
import TextBox from '../inputs/TextBox'
import TextArea from '../inputs/TextArea'

export default function PersonTekst({index, removeOsoba, slovo_db, ime_db, tekst_db}) {

    const [tekst, setTekst] = useState(tekst_db ? tekst_db : '')
    const [ime, setIme] = useState(ime_db ? ime_db : '')
    const [slovo, setSlovo] = useState(slovo_db ? slovo_db : '')
    const [data, setData] = useState({})

    useEffect(() => {
      setData({
        tekst: tekst,
        slovo: slovo,
        ime: ime
      })

      
    }, [tekst, ime, slovo])
    

  return (
    <div className='personTekst border_bottom'>
        <button className="close close_rjesenje" onClick={()=>removeOsoba(index)}>x</button>


        <Slovo title="Slovo" value={slovo} setValue={setSlovo} />

        <TextBox title="Ime" value={ime} setValue={setIme} />

        <TextArea title="Tekst" value={tekst} setValue={setTekst} />

    </div>
  )
}
