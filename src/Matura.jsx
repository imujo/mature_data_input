import React, { useState } from 'react'
import DropdownComponent from './DropdownComponent'
import Button from 'react-bootstrap/Button'
import AddZadatak from './AddZadatak'
import AddNadzadatak from './AddNadzadatak'


export default function Matura() {

    const predmetOptions = ['hrvatski', 'engleski', 'matematika']
    const [predmet, setPredmet] = useState('')

    const godinaOpitions = [2010, 2011, 2012, 2013, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022]
    const [godina, setGodina] = useState(0)

    const razinaOptions = ['A', 'B']
    const [razina, setRazina] = useState('')

    const sezonaOptions = ['ljeto', 'jesen']
    const [sezona, setSezona] = useState('')
    
    const [matura, setMatura] = useState('')
    const [maturaId, setMaturaId] = useState(0)

    const submit = () => { 
        setMatura([predmet, godina, razina, sezona].join(' - '))
        setMaturaId(1)
        setIsMaturaSubmitted(true)
     }

     const [zadatciList, setZadatciList] = useState([])
     const [zadatciListIndex, setZadatciListIndex] = useState(0)


    function onAddZadatak(){
      setZadatciList(zadatciList.concat(zadatciListIndex))
      console.log(zadatciListIndex)
      setZadatciListIndex(zadatciListIndex+1)
    }

    function onRemoveZadatak(i){
      console.log(i)
      setZadatciList(zadatci => zadatci.filter((item, _) => item !== i))
    }

    const [isMaturaSubmitted, setIsMaturaSubmitted] = useState(false)



    return (
      <main>
        <div className="choose_matura">
            <DropdownComponent options={predmetOptions} option={predmet} setOption={setPredmet} optionName={'predmet'} disabled={isMaturaSubmitted}>
            </DropdownComponent>
            <DropdownComponent options={godinaOpitions} option={godina} setOption={setGodina} optionName={'godina'} disabled={isMaturaSubmitted} >
            </DropdownComponent>
            <DropdownComponent options={razinaOptions} option={razina} setOption={setRazina} optionName={'razina'} disabled={isMaturaSubmitted} >
            </DropdownComponent>
            <DropdownComponent options={sezonaOptions} option={sezona} setOption={setSezona} optionName={'sezona'} disabled={isMaturaSubmitted} >
            </DropdownComponent>
            <Button variant="danger"
            onClick={submit}
            >Submit</Button>
        </div>
        <h3 className="matura_name">{matura}</h3>

        {zadatciList.map((item, i)=> {return <AddZadatak key={item} index={item} removeZadatak={onRemoveZadatak}/>})}
        <AddNadzadatak />
        <div className="dodajButtons">
            <Button 
              variant="danger"
              onClick={onAddZadatak}
              disabled={!maturaId}
            >
              Dodaj zadatak
            </Button>

            <Button 
                  variant="danger"
                  // onClick={}
                  disabled={!maturaId}
            >
              Dodaj nadzadatak
            </Button>
        </div>
        
      </main>
    );
  }