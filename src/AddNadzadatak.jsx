import React, { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form'
import TekstIZaokruzivanje from './nadzadatakForms/TekstIZaokruzivanje'
import PovezivanjeTekstovi from './nadzadatakForms/PovezivanjeTekstovi'
import NadopuniIzbor from './nadzadatakForms/NadopuniIzbor'
import NadopuniSlobodno from './nadzadatakForms/NadopuniSlobodno'
import Povezivanje from './nadzadatakForms/Povezivanje'
import { Button } from 'react-bootstrap'
import AddZadatak from './AddZadatak'
import VrstaZadatka from './inputs/VrstaZadatka'
import BrojZadatka from './inputs/BrojZadatka'
import FileInput from './inputs/FileInput'
import { getNadzadatakVrstaList } from './ServerFunctions'
import { getKeyByValue } from './ServerFunctions'


export default function AddNadzadatak({index, removeZadatak, id, vrsta_id, broj_nadzadatka, nadzadatak_tekst, slika_path, audio_path, zadatci}) {

    const [vrsta, setVrsta] = useState('')
    const [nadzadatakVrstaList, setNadzadatakVrstaList] = useState({})
    const [vrstaOptions, setVrstaOptions] = useState([])

    const [nadzadatakBroj, setNadzadatakBroj] = useState(broj_nadzadatka ? broj_nadzadatka : 0)
    const [slika, setSlika] = useState(slika_path ? slika_path : '')
    const [audio, setAudio] = useState(audio_path ? audio_path : '')
    const [tekst, setTekst] = useState(nadzadatak_tekst ? nadzadatak_tekst : {})


    function submit(e){
        e.preventDefault()
    }

    // useEffect(() => {
    //   setNadzadatakBroj(0)
    //   setSlika('')
    //   setAudio('')

    // }, [vrsta])

    useEffect(()=>{
        if (id){
          setVrsta(getKeyByValue(nadzadatakVrstaList, vrsta_id))
        }
      }, [nadzadatakVrstaList])

    useEffect(() => {
      
        getNadzadatakVrstaList()
          .then(data => {
            setNadzadatakVrstaList(data)
            setVrstaOptions(Object.keys(data))
  
          })
      
  
       }, [])
    

    const [zadatciList, setZadatciList] = useState(zadatci ? zadatci : [])
     const [zadatciListIndex, setZadatciListIndex] = useState(0)


    function onAddZadatak(){
      setZadatciList(zadatciList.concat(zadatciListIndex))
      setZadatciListIndex(zadatciListIndex+1)
    }

    function onRemoveZadatak(i){
      setZadatciList(zadatci => zadatci.filter((item, _) => item !== i))
    }

  return (
    <Form className=' nadzadatakDiv' onSubmit={submit}>
        <div className="z_form">
            <div className="nadzadatak">
                <button className="close" onClick={()=>removeZadatak(index)}>x</button>
                <h2>Nadzadatak {nadzadatakBroj ? nadzadatakBroj : null}</h2>



                <VrstaZadatka vrstaOptions={vrstaOptions} vrsta={vrsta} setVrsta={setVrsta} />

                <BrojZadatka zadatakBroj={nadzadatakBroj} setZadatakBroj={setNadzadatakBroj} title="Broj nadzadatka" />

                <FileInput title='Slika' type="image/jpeg, image/png" value={slika} setValue={setSlika} />

                <FileInput title="Audio" type=".mp3,audio/*" value={audio} setValue={setAudio} />

                {
                    vrsta !== '' ? 
                        <img src={`./${vrsta}.png`} alt="primjer" className='primjerImage' />
                    : null
                }


            </div>

            <div className="nadzadatakVrstaDiv">
                <h2>Tekst</h2>
                {   
                    vrsta === 'tekst i zaokruzivanje' ? 
                        <TekstIZaokruzivanje value={tekst} setValue={setTekst} /> : null
                }

                {
                    vrsta === 'povezivanje tekstovi' ?
                        <PovezivanjeTekstovi value={tekst} setValue={setTekst} /> : null
                }

                {
                    vrsta === 'nadopuni izbor' ? 
                        <NadopuniIzbor value={tekst} setValue={setTekst}/> : null
                }

                {
                    vrsta === 'nadopuni slobodno' ?
                        <NadopuniSlobodno value={tekst} setValue={setTekst}/> : null
                }

                {
                    vrsta === 'povezivanje' ? 
                        <Povezivanje value={tekst} setValue={setTekst}/> : null
                }
            </div>
        </div>
        <div className="nz_zadatciDiv">
            {zadatciList.map((item, i)=> {
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
                nadzadatak={vrsta}
              />
                
            })}
        </div>
        <div className="nz_buttons">
            <Button 
              variant="danger"
              onClick={onAddZadatak}
              disabled={!vrsta}
            >
              Dodaj zadatak
            </Button>
        </div>
    </Form>
  )
}
