import React, { useState } from "react";
import Slovo from "./inputs/Slovo";
import TextBox from "./inputs/TextBox";
import CheckBox from "./inputs/CheckBox";
import BrojBodova from "./inputs/BrojBodova";
import FileInput from "./inputs/FileInput";
import { deleteRjesenje } from "./ServerFunctions";

export default function Rjesenje({
  rjesenje_id,
  vrsta,
  nadzadatak,
  rjesenje_tekst_db,
  slovo_db,
  tocno_db,
  slika_path_db,
  broj_bodova_db,
  updateRjesenja,
  setRjesenjeList,
  rjesenjeList,
}) {
  const [slovo, setSlovo] = useState(slovo_db ? slovo_db : "");
  const [tekst, setTekst] = useState(
    rjesenje_tekst_db ? rjesenje_tekst_db : ""
  );
  const [tocno, setTocno] = useState(tocno_db ? tocno_db : false);
  const [brojBodova, setBrojBodova] = useState(
    broj_bodova_db ? broj_bodova_db : 0
  );
  const [slika, setSlika] = useState(slika_path_db ? slika_path_db : "");

  const submit = () => {
    setRjesenjeList(
      rjesenjeList.concat({
        rjesenje_tekst: tekst,
        slovo: slovo,
        tocno: tocno,
        slika_path: slika,
        broj_bodova: brojBodova,
      })
    );
  };

  const del = async () => {
    await deleteRjesenje(rjesenje_id);
    updateRjesenja();
  };

  const formatOptions = {
    zaokruzivanje: [
      <Slovo title="Slovo" value={slovo} setValue={setSlovo} key={1} />,
      <TextBox
        title="Tekst rjesenja"
        value={tekst}
        setValue={setTekst}
        key={2}
      />,
      <CheckBox
        title={"Je li tocno?"}
        value={tocno}
        setValue={setTocno}
        key={3}
      />,
      <FileInput
        type="image/jpeg, image/png"
        title="Slika"
        value={slika}
        setValue={setSlika}
        key={4}
      />,
    ],
    "kratki odgovor": [
      <TextBox
        title="Tekst rjesenja"
        value={tekst}
        setValue={setTekst}
        key={1}
      />,
    ],
    "dugi odgovor": [
      <TextBox
        title="Tekst rjesenja"
        value={tekst}
        setValue={setTekst}
        key={1}
      />,
      <BrojBodova
        title="Broj bodova"
        value={brojBodova}
        setValue={setBrojBodova}
        key={2}
      />,
      <FileInput
        type="image/jpeg, image/png"
        title="Slika"
        value={slika}
        setValue={setSlika}
        key={3}
      />,
    ],
    "tekst i zaokruzivanje": [
      <Slovo title="Slovo" value={slovo} setValue={setSlovo} key={1} />,
      <TextBox
        title="Tekst rjesenja"
        value={tekst}
        setValue={setTekst}
        key={2}
      />,
      <CheckBox
        title={"Je li tocno?"}
        value={tocno}
        setValue={setTocno}
        key={3}
      />,
      <FileInput
        type="image/jpeg, image/png"
        title="Slika"
        value={slika}
        setValue={setSlika}
        key={4}
      />,
    ],
    "povezivanje tekstovi": [
      <Slovo title="Slovo" value={slovo} setValue={setSlovo} key={1} />,
    ],
    "nadopuni izbor": [
      <Slovo title="Slovo" value={slovo} setValue={setSlovo} key={1} />,
    ],
    "nadopuni slobodno": [
      <TextBox
        title="Tekst rjesenja"
        value={tekst}
        setValue={setTekst}
        key={1}
      />,
    ],
    povezivanje: [
      <Slovo title="Slovo" value={slovo} setValue={setSlovo} key={1} />,
    ],
  };

  return (
    <div className="rjesenjeDiv border_bottom">
      <button className="close close_rjesenje" onClick={del}>
        x
      </button>

      {formatOptions[nadzadatak ? nadzadatak : vrsta]}
    </div>
  );
}
