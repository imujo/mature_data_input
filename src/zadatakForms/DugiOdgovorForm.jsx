import React, { useEffect, useState } from 'react'
import TextArea from '../inputs/TextArea'


export default function DugiOdgovorForm({setValue}) {

    const [tekst, setTekst] = useState('')

    useEffect(() => {
        setValue({
            tekst: tekst
        })
    }, [tekst])
    

  return (
    <>
        <TextArea title="Tekst" value={tekst} setValue={setTekst} />
    </>
  )
}
