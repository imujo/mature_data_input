import React, { useEffect, useState } from 'react'
import TextBox from '../inputs/TextBox'
import CheckBox from '../inputs/CheckBox'


export default function ZaokruzivanjeForm({ setValue}) {

  const [tekst, setTekst] = useState('')
  const [citat, setCitat] = useState('')
  const [primjer, setPrimjer] = useState(false)


  useEffect(() => {
    
    let text = {
      tekst: tekst,
      citat: citat
    }

    setValue(text)

  }, [
    tekst, citat
  ])
  


  return (
    <>
        


      <TextBox title="Tekst zadatka" value={tekst} setValue={setTekst} />
      <TextBox title="Citat" value={citat} setValue={setCitat} />
      <CheckBox title='Je li primjer?' value={primjer} setValue={setPrimjer} />
    </>
  )
}
