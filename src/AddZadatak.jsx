import React, {  useState } from 'react'
import DropdownComponent from './DropdownComponent'
import Form from 'react-bootstrap/Form'
import ZaokruzivanjeForm from './ZaokruzivanjeForm'
import Button from 'react-bootstrap/Button'
import Rjesenje from './Rjesenje'
import KratkiOdgovorForm from './KratkiOdgovorForm'
import DugiOdgovorForm from './DugiOdgovorForm'

export default function AddZadatak({removeZadatak, index}) {

  
  

    
    const vrstaOptions = ['zaokruzivanje', 'kratki odgovor', 'dugi odgovor']
    const [vrsta, setVrsta] = useState('')
    const [zadatakBroj, setZadatakBroj] = useState(0)
    const [zadatakTekst, setZadatakTekst] = useState({})
    const [brojBodova, setBrojBodova] = useState(0)
    const [slika, setSlika] = useState('')

    



     const [rjesenjeList, setrjesenjeList] = useState([])
     const [rjesenjeListIndex, setrjesenjeListIndex] = useState(0)


    function onAddRjesenje(){
      setrjesenjeList(rjesenjeList.concat(rjesenjeListIndex))
      setrjesenjeListIndex(rjesenjeListIndex+1)
    }

    function onRemoveRjesenje(i){
      console.log(i)
      setrjesenjeList(zadatci => zadatci.filter((item, _) => item !== i))
    }


    const onSubmit = (e) => { 
      e.preventDefault()

      let data = {
        vrstaZadatka: vrsta,
        brojZadatka: zadatakBroj,
        tekstZadatka: zadatakTekst,
        brojBodova: brojBodova,
        slika: slika
      }

      console.log(data)
     }

    


  return (
    <Form className='zadatakDiv' onSubmit={onSubmit}>
      <div className='z_form'>
        <button className="close" onClick={()=>removeZadatak(index)}>x</button>
        <div className="zadatak">
        <h2>Zadatak {zadatakBroj}</h2>

        <Form.Group className="mb-3 z_item" controlId="formBasicEmail">
            <Form.Label>Vrsta zadatka</Form.Label>
            <DropdownComponent options={vrstaOptions} option={vrsta} optionName={'vrsta'} setOption={setVrsta} ></DropdownComponent>
            <Form.Text className="text-muted">
            </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3 z_item" controlId="formBasicEmail">
              <Form.Label>Broj zadatka</Form.Label>
              <Form.Control disabled={!vrsta} step='0.1' type="number" className='z_broj' placeholder="Broj"
              onChange={e=>setZadatakBroj(e.target.value)}
              value={zadatakBroj}
              />
          </Form.Group>

          <Form.Group className="mb-3 z_item" controlId="formBasicEmail">
              <Form.Label>Broj bodova</Form.Label>
              <Form.Control disabled={!vrsta} type="number" className='z_broj' placeholder="Broj"
              onChange={e=>setBrojBodova(e.target.value)}
              value={brojBodova}
              />
          </Form.Group>

        {
            vrsta === 'zaokruzivanje' ? 
            <ZaokruzivanjeForm setValue={setZadatakTekst}></ZaokruzivanjeForm>
            :
            null
        }
        {
            vrsta === 'kratki odgovor' ? 
            <KratkiOdgovorForm setValue={setZadatakTekst} />
            :
            null
        }
        {
            vrsta === 'dugi odgovor' ? 
              <DugiOdgovorForm setValue={setZadatakTekst} />
            :
            null
        }
        <Form.Group className="mb-3 z_item" controlId="formBasicEmail">
              <Form.Label>Slika</Form.Label>
            <input type="file" disabled={!vrsta} 
            onChange={e=>setSlika(e.target.value)}
            value={slika}
            />
          </Form.Group>
        </div>

        <div className="rjesenje">
          <h2>Rjesenje</h2>
          {rjesenjeList.map((item, i)=> {return <Rjesenje key={item} index={item} removeRjesenje={onRemoveRjesenje} vrsta={vrsta} />})}

          <Button 
          variant="danger" 
          disabled={!vrsta}
          onClick={onAddRjesenje}
          >Dodaj rjesenje</Button>
        </div>

      </div>
      <div className="z_submitDiv">
      <Button variant="success" type="submit" className='z_submit'>
        Submit
      </Button>

      </div>
    </Form>
  )
}
