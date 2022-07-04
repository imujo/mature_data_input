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



export default function AddZadatak({removeZadatak, id, index, nadzadatak, vrsta_id, broj_zadatka, zadatak_tekst, slika_path, broj_bodova, primjer_bool, rjesenja_db}) {

  
  

    
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


    
    
    



     const [rjesenjeList, setrjesenjeList] = useState(rjesenja_db ? rjesenja_db : [])
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
      <CheckBox title='Je li primjer?' value={primjer} setValue={setPrimjer} key={4} />,
      <FileInput title={"Slika"} type="image/jpeg, image/png"  value={slika} setValue={setSlika} key={3} />
    ],
    'kratki odgovor': [
      <BrojZadatka title='Broj zadatka'  zadatakBroj={zadatakBroj} setZadatakBroj={setZadatakBroj} key={0} />,
      <BrojBodova   brojBodova={brojBodova} setBrojBodova={setBrojBodova} key={1} />,
      <KratkiOdgovorForm value={zadatakTekst} setValue={setZadatakTekst} key={2} />,
      <FileInput title={"Slika"} type="image/jpeg, image/png"  value={slika} setValue={setSlika} key={3} />
    ],
    'dugi odgovor': [
      <BrojZadatka title='Broj zadatka'  zadatakBroj={zadatakBroj} setZadatakBroj={setZadatakBroj} key={1} />,
      <BrojBodova   brojBodova={brojBodova} setBrojBodova={setBrojBodova} key={2} />,
      <DugiOdgovorForm value={zadatakTekst} setValue={setZadatakTekst} key={3} />,
      <FileInput title={"Slika"} type="image/jpeg, image/png"  value={slika} setValue={setSlika} key={4} />
    ],
    'tekst i zaokruzivanje': [
      <BrojZadatka title='Broj zadatka'  zadatakBroj={zadatakBroj} setZadatakBroj={setZadatakBroj} key={1} />,
      <BrojBodova   brojBodova={brojBodova} setBrojBodova={setBrojBodova} key={2} />,
      <ZaokruzivanjeForm value={zadatakTekst} setValue={setZadatakTekst} key={3} />,
      <FileInput title={"Slika"} type="image/jpeg, image/png"  value={slika} setValue={setSlika} key={4} />
    ],
    'povezivanje tekstovi': [
      <BrojZadatka title='Broj zadatka'  zadatakBroj={zadatakBroj} setZadatakBroj={setZadatakBroj} key={1} />,
      <BrojBodova   brojBodova={brojBodova} setBrojBodova={setBrojBodova} key={2} />,
      <KratkiOdgovorForm value={zadatakTekst} setValue={setZadatakTekst} key={3} />,
      <CheckBox title='Je li primjer?' value={primjer} setValue={setPrimjer} key={4} />,
    ],
    'nadopuni izbor': [
      <BrojZadatka title='Broj zadatka'  zadatakBroj={zadatakBroj} setZadatakBroj={setZadatakBroj} key={1} />,
      <BrojBodova   brojBodova={brojBodova} setBrojBodova={setBrojBodova} key={2} />,
    ],
    'nadopuni slobodno': [
      <BrojZadatka title='Broj zadatka'  zadatakBroj={zadatakBroj} setZadatakBroj={setZadatakBroj} key={1} />,
      <BrojBodova   brojBodova={brojBodova} setBrojBodova={setBrojBodova} key={2} />,
    ],
    'povezivanje': [
      <BrojZadatka title='Broj zadatka'  zadatakBroj={zadatakBroj} setZadatakBroj={setZadatakBroj} key={1} />,
      <BrojBodova   brojBodova={brojBodova} setBrojBodova={setBrojBodova} key={2} />,
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
          {rjesenjeList.map((item, i)=> {
            return <Rjesenje 
              key={i} 
              removeRjesenje={onRemoveRjesenje} 
              vrsta={vrsta} 
              nadzadatak={nadzadatak}
              rjesenje_tekst_db={item.rjesenje_tekst}
              slovo_db={item.slovo}
              tocno_db={item.tocno}
              slika_path_db={item.slika_path}
              broj_bodova_db={item.broj_bodova}
          />})}

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
