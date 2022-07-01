import React, { useState } from 'react'
import DropdownComponent from './DropdownComponent'
import Button from 'react-bootstrap/Button'
import AddZadatak from './AddZadatak'

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


    return (
      <main>
        <div className="choose_matura">
            <DropdownComponent options={predmetOptions} option={predmet} setOption={setPredmet} optionName={'predmet'}>
            </DropdownComponent>
            <DropdownComponent options={godinaOpitions} option={godina} setOption={setGodina} optionName={'godina'}>
            </DropdownComponent>
            <DropdownComponent options={razinaOptions} option={razina} setOption={setRazina} optionName={'razina'}>
            </DropdownComponent>
            <DropdownComponent options={sezonaOptions} option={sezona} setOption={setSezona} optionName={'sezona'}>
            </DropdownComponent>
            <Button variant="danger"
            onClick={submit}
            >Submit</Button>
        </div>
        <h3 className="matura_name">{matura}</h3>

        {zadatciList.map((item, i)=> {return <AddZadatak key={item} index={item} removeZadatak={onRemoveZadatak}/>})}
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