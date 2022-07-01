import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import DropdownComponent from './DropdownComponent'
import TekstIZaokruzivanje from './nadzadatakForms/TekstIZaokruzivanje'
import PovezivanjeTekstovi from './nadzadatakForms/PovezivanjeTekstovi'
import NadopuniIzbor from './nadzadatakForms/NadopuniIzbor'
import NadopuniSlobodno from './nadzadatakForms/NadopuniSlobodno'
import Povezivanje from './nadzadatakForms/Povezivanje'

export default function AddNadzadatak() {

    const [vrsta, setVrsta] = useState('')
    const vrstaOptions = ['tekst i zaokruzivanje', 'povezivanje tekstovi', 'nadopuni izbor', 'nadopuni slobodno', 'povezivanje']

    const [nadzadatakBroj, setNadzadatakBroj] = useState(0)
    const [slika, setSlika] = useState('')

    function submit(e){
        e.preventDefault()
    }

  return (
    <Form className=' nadzadatakDiv' onSubmit={submit}>
        <div className="nadzadatak">
            <button className="close" onClick={()=>{}}>x</button>
            <h2>Nadzadatak {nadzadatakBroj ? nadzadatakBroj : null}</h2>

            <Form.Group className="mb-3 z_item" controlId="formBasicEmail">
                <Form.Label>Vrsta zadatka</Form.Label>
                <DropdownComponent options={vrstaOptions} option={vrsta} optionName={'vrsta'} setOption={setVrsta} ></DropdownComponent>
                <Form.Text className="text-muted">
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3 z_item" controlId="formBasicEmail">
                <Form.Label>Broj nadzadatka</Form.Label>
                <Form.Control disabled={!vrsta} step='0.1' type="number" className='z_broj' placeholder="Broj"
                onChange={e=>setNadzadatakBroj(e.target.value)}
                value={nadzadatakBroj}
                />
            </Form.Group>

            <Form.Group className="mb-3 z_item" controlId="formBasicEmail">
                <Form.Label>Slika</Form.Label>
                <input type="file" disabled={!vrsta} 
                onChange={e=>setSlika(e.target.value)}
                value={slika}
                accept="image/jpeg, image/png"
                />
            </Form.Group>

            <Form.Group className="mb-3 z_item" controlId="formBasicEmail">
                <Form.Label>Audio</Form.Label>
                <input type="file" disabled={!vrsta} 
                onChange={e=>setSlika(e.target.value)}
                value={slika}
                accept=".mp3,audio/*"
                />
            </Form.Group>

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

    </Form>
  )
}
