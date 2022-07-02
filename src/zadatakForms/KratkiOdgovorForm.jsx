import React, { useEffect, useState } from 'react'
import TextBox from '../inputs/TextBox'

export default function KratkiOdgovorForm({setValue}) {

    const [tekst, setTekst] = useState('')

    useEffect(() => {
      
        setValue({
            tekst: tekst
        })
      
    }, [tekst])
    
  return (
    <>
        <TextBox title="Tekst zadatka" value={tekst} setValue={setTekst} />
    </>
  )
}
