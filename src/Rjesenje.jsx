import React, { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form'
import Slovo from './inputs/Slovo'
import TextBox from './inputs/TextBox'
import CheckBox from './inputs/CheckBox'
import BrojBodova from './inputs/BrojBodova'
import FileInput from './inputs/FileInput'


export default function Rjesenje({index, removeRjesenje, vrsta, nadzadatak}) {

  const [slovo, setSlovo] = useState('')
  const [tekst, setTekst] = useState('')
  const [tocno, setTocno] = useState(false)
  const [brojBodova, setBrojBodova] = useState(0)
  const [slika, setSlika] = useState('')

  useEffect(() => {
    setSlovo('')
    setTekst('')
    setTocno(false)
    setBrojBodova(0)
    setSlika('')
    
  }, [vrsta, nadzadatak])
  


  const formatOptions = {
    'zaokruzivanje': [
      <Slovo title="Slovo" value={slovo} setValue={setSlovo} />,
      <TextBox title="Tekst rjesenja" value={tekst} setValue={setTekst} />,
      <CheckBox title={'Je li tocno?'} value={tocno} setValue={setTocno} />,
      <FileInput type="image/jpeg, image/png" title="Slika" value={slika} setValue={setSlika} />
    ],
    'kratki odgovor': [
      <TextBox title="Tekst rjesenja" value={tekst} setValue={setTekst} />
    ],
    'dugi odgovor': [
      <TextBox title="Tekst rjesenja" value={tekst} setValue={setTekst} />,
      <BrojBodova title='Broj bodova' value={brojBodova} setValue={setBrojBodova} />,
      <FileInput type="image/jpeg, image/png" title="Slika" value={slika} setValue={setSlika} />
    ],
    'tekst i zaokruzivanje': [
      <Slovo title="Slovo" value={slovo} setValue={setSlovo} />,
      <TextBox title="Tekst rjesenja" value={tekst} setValue={setTekst} />,
      <CheckBox title={'Je li tocno?'} value={tocno} setValue={setTocno} />,
      <FileInput type="image/jpeg, image/png" title="Slika" value={slika} setValue={setSlika} />
    ],
    'povezivanje tekstovi': [
      <Slovo title="Slovo" value={slovo} setValue={setSlovo} />
    ],
    'nadopuni izbor': [
      <Slovo title="Slovo" value={slovo} setValue={setSlovo} />
    ],
    'nadopuni slobodno': [
      <TextBox title="Tekst rjesenja" value={tekst} setValue={setTekst} />
    ],
    'povezivanje': [
      <Slovo title="Slovo" value={slovo} setValue={setSlovo} />
    ],
    

  }

  return (
    <Form className='rjesenjeDiv border_bottom'>
        <button className="close close_rjesenje" onClick={()=>removeRjesenje(index)}>x</button>


        {formatOptions[nadzadatak ? nadzadatak : vrsta]}
        


       

        

    </Form>
  )
}
