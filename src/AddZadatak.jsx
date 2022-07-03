import React, { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form'
import ZaokruzivanjeForm from './zadatakForms/ZaokruzivanjeForm'
import Button from 'react-bootstrap/Button'
import Rjesenje from './Rjesenje'
import KratkiOdgovorForm from './zadatakForms/KratkiOdgovorForm'
import DugiOdgovorForm from './zadatakForms/DugiOdgovorForm'
import VrstaZadatka from './inputs/VrstaZadatka'
import BrojZadatka from './inputs/BrojZadatka'
import BrojBodova from './inputs/BrojBodova'
import CheckBox from './inputs/CheckBox'
import FileInput from './inputs/FileInput'
import { getZadatakVrstaList } from './ServerFunctions'
import { getKeyByValue } from './ServerFunctions'



export default function AddZadatak({removeZadatak, id, index, nadzadatak, vrsta_id, matura_id, broj_zadatka, zadatak_tekst, slika_path, broj_bodova, primjer_bool}) {

  
  

    
    const [vrsta, setVrsta] = useState('')
    const [vrstaOptions, setvrstaOptions] = useState([])
    const [zadatakVrstaList, setZadatakVrstaList] = useState({})
    const [zadatakBroj, setZadatakBroj] = useState(broj_zadatka ? broj_zadatka : 0)
    const [zadatakTekst, setZadatakTekst] = useState(zadatak_tekst ? zadatak_tekst : {})
    const [brojBodova, setBrojBodova] = useState(broj_bodova ? broj_bodova : 0)
    const [slika, setSlika] = useState('')
    const [primjer, setPrimjer] = useState(primjer_bool ? primjer_bool : false)

    // useEffect(() => {
    //   setZadatakBroj(0)
    //   setZadatakTekst('')
    //   setBrojBodova(0)
    //   setSlika('')
    //   setPrimjer(false)

    
    // }, [vrsta, nadzadatak])

    useEffect(()=>{
      if (id){
        setVrsta(getKeyByValue(zadatakVrstaList, vrsta_id))
      }
    }, [zadatakVrstaList])

    useEffect(() => {
      
      getZadatakVrstaList()
        .then(data => {
          setZadatakVrstaList(data)
          setvrstaOptions(Object.keys(data))

        })
    

     }, [])


    
    
    



     const [rjesenjeList, setrjesenjeList] = useState([])
     const [rjesenjeListIndex, setrjesenjeListIndex] = useState(0)


    function onAddRjesenje(){
      setrjesenjeList(rjesenjeList.concat(rjesenjeListIndex))
      setrjesenjeListIndex(rjesenjeListIndex+1)
    }

    function onRemoveRjesenje(i){
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
  
  


  const formatOptions = {
    'zaokruzivanje': [
      <BrojZadatka title='Broj zadatka'  zadatakBroj={zadatakBroj} setZadatakBroj={setZadatakBroj} key={0} />,
      <BrojBodova   brojBodova={brojBodova} setBrojBodova={setBrojBodova} key={1} />,
      <ZaokruzivanjeForm value={zadatakTekst} setValue={setZadatakTekst} key={2} />,
      <CheckBox title='Je li primjer?' value={primjer} setValue={setPrimjer} />,
      <FileInput title={"Slika"} type="image/jpeg, image/png"  value={slika} setValue={setSlika} key={3} />
    ],
    'kratki odgovor': [
      <BrojZadatka title='Broj zadatka'  zadatakBroj={zadatakBroj} setZadatakBroj={setZadatakBroj} />,
      <BrojBodova   brojBodova={brojBodova} setBrojBodova={setBrojBodova} />,
      <KratkiOdgovorForm value={zadatakTekst} setValue={setZadatakTekst} />,
      <FileInput title={"Slika"} type="image/jpeg, image/png"  value={slika} setValue={setSlika} />
    ],
    'dugi odgovor': [
      <BrojZadatka title='Broj zadatka'  zadatakBroj={zadatakBroj} setZadatakBroj={setZadatakBroj} />,
      <BrojBodova   brojBodova={brojBodova} setBrojBodova={setBrojBodova} />,
      <DugiOdgovorForm value={zadatakTekst} setValue={setZadatakTekst} />,
      <FileInput title={"Slika"} type="image/jpeg, image/png"  value={slika} setValue={setSlika} />
    ],
    'tekst i zaokruzivanje': [
      <BrojZadatka title='Broj zadatka'  zadatakBroj={zadatakBroj} setZadatakBroj={setZadatakBroj} />,
      <BrojBodova   brojBodova={brojBodova} setBrojBodova={setBrojBodova} />,
      <ZaokruzivanjeForm value={zadatakTekst} setValue={setZadatakTekst} />,
      <FileInput title={"Slika"} type="image/jpeg, image/png"  value={slika} setValue={setSlika} />
    ],
    'povezivanje tekstovi': [
      <BrojZadatka title='Broj zadatka'  zadatakBroj={zadatakBroj} setZadatakBroj={setZadatakBroj} />,
      <BrojBodova   brojBodova={brojBodova} setBrojBodova={setBrojBodova} />,
      <KratkiOdgovorForm value={zadatakTekst} setValue={setZadatakTekst} />,
      <CheckBox title='Je li primjer?' value={primjer} setValue={setPrimjer} />,
    ],
    'nadopuni izbor': [
      <BrojZadatka title='Broj zadatka'  zadatakBroj={zadatakBroj} setZadatakBroj={setZadatakBroj} />,
      <BrojBodova   brojBodova={brojBodova} setBrojBodova={setBrojBodova} />,
    ],
    'nadopuni slobodno': [
      <BrojZadatka title='Broj zadatka'  zadatakBroj={zadatakBroj} setZadatakBroj={setZadatakBroj} />,
      <BrojBodova   brojBodova={brojBodova} setBrojBodova={setBrojBodova} />,
    ],
    'povezivanje': [
      <BrojZadatka title='Broj zadatka'  zadatakBroj={zadatakBroj} setZadatakBroj={setZadatakBroj} />,
      <BrojBodova   brojBodova={brojBodova} setBrojBodova={setBrojBodova} />,
    ],
  }
    


  return (
    <Form className='zadatakDiv' onSubmit={onSubmit}>
      <div className='z_form'>
        <button className="close" onClick={()=>removeZadatak(index)}>x</button>
        <div className="zadatak">
        <h2>Zadatak {zadatakBroj}</h2>

        
        {
          nadzadatak ? null :
          <VrstaZadatka vrstaOptions={vrstaOptions} vrsta={vrsta} setVrsta={setVrsta} />
        }
        {formatOptions[nadzadatak ? nadzadatak : vrsta]}
          
        
        

        </div>

        <div className="rjesenje">
          <h2>Rjesenje</h2>
          {rjesenjeList.map((item, i)=> {return <Rjesenje key={item} index={item} removeRjesenje={onRemoveRjesenje} vrsta={vrsta
          } nadzadatak={nadzadatak} />})}

          <Button 
          variant="danger" 
          disabled={!vrsta && !nadzadatak}
          onClick={onAddRjesenje}
          >Dodaj rjesenje</Button>
        </div>

      </div>
      <div className="z_submitDiv">
      <Button variant="danger" type="submit" className='z_submit'>
        Submit
      </Button>

      </div>
    </Form>
  )
}
