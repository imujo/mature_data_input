import React, { useState } from 'react'
import Slovo from '../inputs/Slovo'
import TextBox from '../inputs/TextBox'


export default function StupacItem({index, removeStupacItem, type}) {

  const [slovoBroj, setSlovoBroj] = useState('')
  const [recenica, setRecenica] = useState('')

  return (
    <div className='stupacItem'>
      <button className="close close_rjesenje" onClick={()=>removeStupacItem(index)}>x</button>

      <Slovo title={type} value={slovoBroj} setValue={setSlovoBroj} />

      <TextBox title="Recenica" value={recenica} setValue={setRecenica}/>

    </div>
  )
}
