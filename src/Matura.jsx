import React, { useEffect, useState } from 'react'
import DropdownComponent from './DropdownComponent'
import Button from 'react-bootstrap/Button'
import AddZadatak from './AddZadatak'
import AddNadzadatak from './AddNadzadatak'
import { getMaturaId, getPredmetiList, getZadatciFromMatura } from './ServerFunctions'


export default function Matura() {

    const [predmetOptions, setPredmetOptions] = useState([])
    const [predmetiList, setPredmetiList] = useState([])
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
      
      
      getMaturaId(predmetiList[predmet], godina, razina, sezona)
        .then(id => {
          if (id){
            console.log(id)
            setMatura([predmet, godina, razina, sezona].join(' - '))
            setMaturaId(id)
            setIsMaturaSubmitted(true)

            getZadatciFromMatura(id)
              .then(data => setZadatciList(data))
          }
        })
      
     }

     useEffect(() => {
      
      getPredmetiList()
        .then(data => {
          setPredmetiList(data)
          setPredmetOptions(Object.keys(data))

        })
    

     }, [])
     

     const [zadatciList, setZadatciList] = useState([])
     const [zadatciListIndex, setZadatciListIndex] = useState(0)


    function onAddZadatak(type){
      setZadatciList(zadatciList.concat({
        index: zadatciListIndex,
        type:type
      }))
      setZadatciListIndex(zadatciListIndex+1)
    }

    function onRemoveZadatak(i){
      setZadatciList(zadatci => zadatci.filter((item, _) => item.index !== i))
    }


    

    const [isMaturaSubmitted, setIsMaturaSubmitted] = useState(false)



    return (
      <main>
        <div className="choose_matura">
            <DropdownComponent options={predmetOptions} option={predmet} setOption={setPredmet} optionName={'predmet'} disabled={isMaturaSubmitted}>
            </DropdownComponent>
            <DropdownComponent options={godinaOpitions} option={godina ? godina : 'Godina'} setOption={setGodina} optionName={'godina'} disabled={isMaturaSubmitted} >
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

        {zadatciList.map((item, i)=> {
          if (item.type === 'zadatak'){
            return <AddZadatak 
              key={item.index} 
              index={item.index} 
              removeZadatak={onRemoveZadatak} 
              id={item.id}
              vrsta_id={item.vrsta_id}
              broj_zadatka={item.broj_zadatka}
              zadatak_tekst={item.zadatak_tekst}
              slika_path={item.slika_path}
              broj_bodova={item.broj_bodova}
              primjer_bool={item.primjer}
            />
          }else if (item.type === 'nadzadatak'){
            return <AddNadzadatak 
              key={item.index} 
              index={item.index} 
              removeZadatak={onRemoveZadatak}
              id={item.id}
              vrsta_id={item.vrsta_id}
              broj_nadzadatka={item.broj_nadzadatka}
              nadzadatak_tekst={item.nadzadatak_tekst}
              slika_path={item.slika_path}
              audio_path={item.audio_path}
              zadatci={item.zadatci}
            />
          }

          return ''
          
          })}
        <div className="dodajButtons">
            <Button 
              variant="danger"
              onClick={()=>onAddZadatak('zadatak')}
              disabled={!maturaId}
            >
              Dodaj zadatak
            </Button>

            <Button 
                  variant="danger"
                  onClick={()=> onAddZadatak('nadzadatak')}
                  disabled={!maturaId}
            >
              Dodaj nadzadatak
            </Button>
        </div>
        
      </main>
    );
  }