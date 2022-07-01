

import React, { useState } from 'react'
import PersonTekst from './PersonTekst'
import Button from 'react-bootstrap/Button'


export default function PovezivanjeTekstovi() {

  const [osobeList, setosobeList] = useState([])
  const [osobeListIndex, setosobeListIndex] = useState(0)

  function onAddOsoba(){
    setosobeList(osobeList.concat(osobeListIndex))
    setosobeListIndex(osobeListIndex+1)
  }

  function onRemoveOsoba(i){
    console.log(i)
    setosobeList(zadatci => zadatci.filter((item, _) => item !== i))
  }

  return (
    <>


      {osobeList.map((item, i)=> {return <PersonTekst key={item} index={item} removeOsoba={onRemoveOsoba} />})}

      <Button 
          variant="danger" 
          onClick={onAddOsoba}
          >Dodaj osobu
      </Button>
        
    </>
  )
}
