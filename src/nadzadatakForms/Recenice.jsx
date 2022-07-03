import React, { useEffect, useState } from 'react'
import CheckBox from '../inputs/CheckBox'
import Slovo from '../inputs/Slovo'
import TextBox from '../inputs/TextBox'



export default function Recenice({index, removeOsoba, slovo_db, recenica_db, primjer_db}) {

    const [slovo, setSlovo] = useState(slovo_db ? slovo_db : '')
    const [recenica, setRecenica] = useState(recenica_db ? recenica_db : '')
    const [primjer, setPrimjer] = useState(primjer_db ? primjer_db : false)
    const [data, setData] = useState({})

    useEffect(() => {
      setData({
        slovo: slovo,
        tekst: recenica,
        primjer: primjer
      })
    }, [slovo, recenica, primjer])
    


    
  return (
    <div className='recenice border_bottom'>
        <button className="close close_rjesenje" onClick={()=>removeOsoba(index)}>x</button>

        <Slovo title="Slovo" value={slovo} setValue={setSlovo} />

        <TextBox title="Recenica" value={recenica} setValue={setRecenica} />

        <CheckBox title="Je li primjer?" value={primjer} setValue={setPrimjer} />

    </div>
  )
}
