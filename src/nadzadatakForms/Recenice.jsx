import React, { useState } from 'react'
import CheckBox from '../inputs/CheckBox'
import Slovo from '../inputs/Slovo'
import TextBox from '../inputs/TextBox'



export default function Recenice({index, removeOsoba}) {

    const [slovo, setSlovo] = useState('')
    const [recenica, setRecenica] = useState('')
    const [primjer, setPrimjer] = useState(false)


    
  return (
    <div className='recenice border_bottom'>
        <button className="close close_rjesenje" onClick={()=>removeOsoba(index)}>x</button>

        <Slovo title="Slovo" value={slovo} setValue={setSlovo} />

        <TextBox title="Recenica" value={recenica} setValue={setRecenica} />

        <CheckBox title="Je li primjer?" value={primjer} setValue={setPrimjer} />

    </div>
  )
}
