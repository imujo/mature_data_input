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


export default function AddNadzadatak({index, removeZadatak}) {

    const [vrsta, setVrsta] = useState('')
    const vrstaOptions = ['tekst i zaokruzivanje', 'povezivanje tekstovi', 'nadopuni izbor', 'nadopuni slobodno', 'povezivanje']

    const [nadzadatakBroj, setNadzadatakBroj] = useState(0)
    const [slika, setSlika] = useState('')
    const [audio, setAudio] = useState('')


    function submit(e){
        e.preventDefault()
    }

    useEffect(() => {
      setNadzadatakBroj(0)
      setSlika('')
      setAudio('')

    }, [vrsta])
    

    const [zadatciList, setZadatciList] = useState([])
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
                        <TekstIZaokruzivanje /> : null
                }

                {
                    vrsta === 'povezivanje tekstovi' ?
                        <PovezivanjeTekstovi /> : null
                }

                {
                    vrsta === 'nadopuni izbor' ? 
                        <NadopuniIzbor /> : null
                }

                {
                    vrsta === 'nadopuni slobodno' ?
                        <NadopuniSlobodno /> : null
                }

                {
                    vrsta === 'povezivanje' ? 
                        <Povezivanje /> : null
                }
            </div>
        </div>
        <div className="nz_zadatciDiv">
            {zadatciList.map((item, i)=> {return <AddZadatak key={item} index={item} removeZadatak={onRemoveZadatak} nadzadatak={vrsta} />})}
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
