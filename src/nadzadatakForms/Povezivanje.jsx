import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
import StupacItem from './StupacItem'


export default function Povezivanje() {

  const [stupac1, setstupac1] = useState([])
  const [stupac1Index, setstupac1Index] = useState(0)

  function onAddStupac1(){
    setstupac1(stupac1.concat(stupac1Index))
    setstupac1Index(stupac1Index+1)
  }

  function onRemoveStupac1(i){
    console.log(i)
    setstupac1(zadatci => zadatci.filter((item, _) => item !== i))
  }



  const [stupac2, setstupac2] = useState([])
  const [stupac2Index, setstupac2Index] = useState(0)

  function onAddStupac2(){
    setstupac2(stupac1.concat(stupac1Index))
    setstupac2Index(stupac1Index+1)
  }

  function onRemoveStupac2(i){
    setstupac2(zadatci => zadatci.filter((item, _) => item !== i))
  }

  return (
    <>
      <h5>Stupac 1</h5>
      <br />

      {stupac1.map((item, i)=> {return <StupacItem key={item} index={item} removeStupacItem={onRemoveStupac1} />})}

      <Button 
          variant="danger" 
          onClick={onAddStupac1}
          >Dodaj redak
      </Button>

      <br /><br /><br />
      <h5>Stupac 2</h5>
      <br />

      {stupac2.map((item, i)=> {return <StupacItem key={item} index={item} removeStupacItem={onRemoveStupac2} />})}

      <Button 
          variant="danger" 
          onClick={onAddStupac2}
          >Dodaj redak
      </Button>

    </>
  )
}
