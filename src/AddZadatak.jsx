import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import ZaokruzivanjeForm from "./zadatakForms/ZaokruzivanjeForm";
import Button from "react-bootstrap/Button";
import Rjesenje from "./Rjesenje";
import KratkiOdgovorForm from "./zadatakForms/KratkiOdgovorForm";
import DugiOdgovorForm from "./zadatakForms/DugiOdgovorForm";
import VrstaZadatka from "./inputs/VrstaZadatka";
import BrojZadatka from "./inputs/BrojZadatka";
import BrojBodova from "./inputs/BrojBodova";
import CheckBox from "./inputs/CheckBox";
import FileInput from "./inputs/FileInput";
import {
  getZadatakVrstaList,
  updateZadatak,
  postRjesenje,
  getRjesenja,
  deleteZadatak,
} from "./ServerFunctions";
import { getKeyByValue } from "./ServerFunctions";

export default function AddZadatak({
  zadatak_id,
  matura_id,
  nadzadatak,
  vrsta_id,
  broj_zadatka,
  zadatak_tekst,
  slika_path,
  broj_bodova,
  primjer_bool,
  rjesenja_db,
  updateZadatci,
  notDeletable,
  zIndex = 0,
}) {
  // VRSTA STATE
  const [vrsta, setVrsta] = useState("Odredi vrstu");
  const [vrstaOptions, setvrstaOptions] = useState([]);
  const [zadatakVrstaList, setZadatakVrstaList] = useState({});

  // DATA STATE
  const [zadatakBroj, setZadatakBroj] = useState(
    broj_zadatka ? broj_zadatka : 0
  );
  const [zadatakTekst, setZadatakTekst] = useState(
    zadatak_tekst ? zadatak_tekst : {}
  );
  const [brojBodova, setBrojBodova] = useState(broj_bodova ? broj_bodova : 0);
  const [slika, setSlika] = useState("");
  const [primjer, setPrimjer] = useState(primjer_bool ? primjer_bool : false);

  // LOCKED
  const [locked, setLocked] = useState(false);

  // SET VRSTA
  useEffect(() => {
    if (zadatak_id && vrsta_id) {
      setVrsta(getKeyByValue(zadatakVrstaList, vrsta_id));
    }
  }, [zadatakVrstaList]);

  // GET VRSTE
  useEffect(() => {
    getZadatakVrstaList().then((data) => {
      setZadatakVrstaList(data);
      setvrstaOptions(Object.keys(data));
    });

    if (vrsta_id) {
      setLocked(true);
    }
  }, []);

  // RJESENJA
  const [rjesenjeList, setRjesenjeList] = useState(
    rjesenja_db ? rjesenja_db : []
  );

  function onAddRjesenje() {
    postRjesenje(matura_id, zadatak_id).then(() => updateRjesenja());
  }

  const updateRjesenja = async () => {
    let rjesenja = await getRjesenja(zadatak_id);

    setRjesenjeList(rjesenja);
  };

  // ON SUBMIT
  const onSubmit = async (e) => {
    e.preventDefault();

    await updateZadatak(
      zadatak_id,
      zadatakVrstaList[vrsta],
      matura_id,
      zadatakBroj,
      zadatakTekst,
      slika,
      brojBodova,
      primjer,
      rjesenjeList
    );

    setLocked(true);
  };

  // CHILDREN
  const formatOptions = {
    zaokruzivanje: [
      <BrojZadatka
        title="Broj zadatka"
        value={zadatakBroj}
        setValue={setZadatakBroj}
        key={0}
      />,
      <BrojBodova value={brojBodova} setValue={setBrojBodova} key={1} />,
      <ZaokruzivanjeForm
        value={zadatakTekst}
        setValue={setZadatakTekst}
        key={2}
      />,
      <CheckBox
        title="Je li primjer?"
        value={primjer}
        setValue={setPrimjer}
        key={4}
      />,
      <FileInput
        title={"Slika"}
        type="image/jpeg, image/png"
        value={slika}
        setValue={setSlika}
        key={3}
      />,
    ],
    "kratki odgovor": [
      <BrojZadatka
        title="Broj zadatka"
        value={zadatakBroj}
        setValue={setZadatakBroj}
        key={0}
      />,
      <BrojBodova value={brojBodova} setValue={setBrojBodova} key={1} />,
      <KratkiOdgovorForm
        value={zadatakTekst}
        setValue={setZadatakTekst}
        key={2}
      />,
      <FileInput
        title={"Slika"}
        type="image/jpeg, image/png"
        value={slika}
        setValue={setSlika}
        key={3}
      />,
    ],
    "dugi odgovor": [
      <BrojZadatka
        title="Broj zadatka"
        value={zadatakBroj}
        setValue={setZadatakBroj}
        key={1}
      />,
      <BrojBodova value={brojBodova} setValue={setBrojBodova} key={2} />,
      <DugiOdgovorForm
        value={zadatakTekst}
        setValue={setZadatakTekst}
        key={3}
      />,
      <FileInput
        title={"Slika"}
        type="image/jpeg, image/png"
        value={slika}
        setValue={setSlika}
        key={4}
      />,
    ],
    "tekst i zaokruzivanje": [
      <BrojZadatka
        title="Broj zadatka"
        value={zadatakBroj}
        setValue={setZadatakBroj}
        key={1}
      />,
      <BrojBodova value={brojBodova} setValue={setBrojBodova} key={2} />,
      <ZaokruzivanjeForm
        value={zadatakTekst}
        setValue={setZadatakTekst}
        key={3}
      />,
      <FileInput
        title={"Slika"}
        type="image/jpeg, image/png"
        value={slika}
        setValue={setSlika}
        key={4}
      />,
    ],
    "povezivanje tekstovi": [
      <BrojZadatka
        title="Broj zadatka"
        value={zadatakBroj}
        setValue={setZadatakBroj}
        key={1}
      />,
      <BrojBodova value={brojBodova} setValue={setBrojBodova} key={2} />,
      <KratkiOdgovorForm
        value={zadatakTekst}
        setValue={setZadatakTekst}
        key={3}
      />,
      <CheckBox
        title="Je li primjer?"
        value={primjer}
        setValue={setPrimjer}
        key={4}
      />,
    ],
    "nadopuni izbor": [
      <BrojZadatka
        title="Broj zadatka"
        value={zadatakBroj}
        setValue={setZadatakBroj}
        key={1}
      />,
      <BrojBodova value={brojBodova} setValue={setBrojBodova} key={2} />,
    ],
    "nadopuni slobodno": [
      <BrojZadatka
        title="Broj zadatka"
        value={zadatakBroj}
        setValue={setZadatakBroj}
        key={1}
      />,
      <BrojBodova value={brojBodova} setValue={setBrojBodova} key={2} />,
    ],
    povezivanje: [
      <BrojZadatka
        title="Broj zadatka"
        value={zadatakBroj}
        setValue={setZadatakBroj}
        key={1}
      />,
      <BrojBodova value={brojBodova} setValue={setBrojBodova} key={2} />,
    ],
  };

  // UNLOCK
  const unlock = () => {
    if (window.confirm("Zelis li otkljucat zadatak?")) {
      setLocked(false);
    }
  };

  const delZadatak = () => {
    deleteZadatak(zadatak_id).then(() => updateZadatci());
  };

  return (
    <Form className="zadatakDiv" onSubmit={onSubmit} style={{ zIndex: zIndex }}>
      <div className={`lock ${locked ? "locked" : ""}`} onClick={unlock}></div>
      <div className="z_form">
        {notDeletable ? null : (
          <button className="close" onClick={delZadatak}>
            x
          </button>
        )}
        <div className="zadatak">
          <h2>Zadatak {zadatakBroj}</h2>

          {nadzadatak ? null : (
            <VrstaZadatka
              vrstaOptions={vrstaOptions}
              vrsta={vrsta}
              setVrsta={setVrsta}
            />
          )}
          {formatOptions[nadzadatak ? nadzadatak : vrsta]}
        </div>

        <div className="rjesenje">
          <h2>Rjesenje</h2>
          {rjesenjeList.map((item, i) => {
            return (
              <Rjesenje
                key={i}
                rjesenje_id={item.id}
                vrsta={vrsta}
                nadzadatak={nadzadatak}
                rjesenje_tekst_db={item.rjesenje_tekst}
                slovo_db={item.slovo}
                tocno_db={item.tocno}
                slika_path_db={item.slika_path}
                broj_bodova_db={item.broj_bodova}
                updateRjesenja={updateRjesenja}
                setRjesenjeList={setRjesenjeList}
                rjesenjeList={rjesenjeList}
              />
            );
          })}

          <Button
            variant="danger"
            disabled={!vrsta && !nadzadatak}
            onClick={onAddRjesenje}
          >
            Dodaj rjesenje
          </Button>
        </div>
      </div>
      <div className="z_submitDiv">
        <Button variant="danger" type="submit" className="z_submit">
          Submit
        </Button>
      </div>
    </Form>
  );
}
