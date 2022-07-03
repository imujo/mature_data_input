import React, { useEffect, useState } from 'react'
import TextBox from '../inputs/TextBox'


export default function ZaokruzivanjeForm({value, setValue}) {

  const [tekst, setTekst] = useState(value ? value.tekst : '')
  const [citat, setCitat] = useState(value ? value.citat : '')


  useEffect(() => {
    
    let text = {
      tekst: tekst,
      citat: citat
    }

    setValue(text)

  }, [tekst, citat])

  
  


  return (
    <>
      <TextBox title="Tekst zadatka" value={tekst} setValue={setTekst} />
      <TextBox title="Citat" value={citat} setValue={setCitat} />
    </>
  )
}
