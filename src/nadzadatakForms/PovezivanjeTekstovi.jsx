

import React, { useState } from 'react'
import PersonTekst from './PersonTekst'
import Button from 'react-bootstrap/Button'


export default function PovezivanjeTekstovi({value, setValue}) {

  const [osobeList, setosobeList] = useState(value ? value.tekstovi : [])
  const [osobeListIndex, setosobeListIndex] = useState(0)

  function onAddOsoba(){
    console.log(value.tekstovi)
    setosobeList(osobeList.concat(osobeListIndex))
    setosobeListIndex(osobeListIndex+1)
  }

  function onRemoveOsoba(i){
    setosobeList(zadatci => zadatci.filter((item, _) => item !== i))
  }

  // TODO on submit gather all data from PersonTeksts

  return (
    <>


      {osobeList.map((item, i)=> {
        return <PersonTekst 
          key={i} 
          index={i} 
          removeOsoba={onRemoveOsoba}
          slovo_db={item.slovo}
          ime_db={item.ime}
          tekst_db={item.tekst}
        />
      })}

      <Button 
          variant="danger" 
          onClick={onAddOsoba}
          >Dodaj osobu
      </Button>
        
    </>
  )
}
