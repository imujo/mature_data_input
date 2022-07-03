import React, { useEffect, useState } from 'react'
import Slovo from '../inputs/Slovo'
import TextBox from '../inputs/TextBox'


export default function StupacItem({index, removeStupacItem, type, slovoBroj_db, recenica_db}) {

  const [slovoBroj, setSlovoBroj] = useState(slovoBroj_db ? slovoBroj_db : '')
  const [recenica, setRecenica] = useState(recenica_db ? recenica_db : '')
  const [data, setData] = useState([])

  useEffect(() => {
    setData({
      slovoBroj: slovoBroj,
      recenica: recenica
    })
  
  }, [slovoBroj, recenica])


  return (
    <div className='stupacItem'>
      <button className="close close_rjesenje" onClick={()=>removeStupacItem(index)}>x</button>

      <Slovo title={type} value={slovoBroj} setValue={setSlovoBroj} />

      <TextBox title="Recenica" value={recenica} setValue={setRecenica}/>

    </div>
  )
}
