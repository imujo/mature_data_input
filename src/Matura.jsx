import React, { useState } from 'react'
import DropdownComponent from './DropdownComponent'
import Button from 'react-bootstrap/Button'
import Zadatak from './Zadatak'

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

    const submit = () => { 
        setMatura([predmet, godina, razina, sezona].join(' - '))
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

        <Zadatak></Zadatak>
        <div className="dodaj_zadatak">
            <Button variant="danger"
        >Dodaj zadatak</Button>
        </div>
        
      </main>
    );
  }