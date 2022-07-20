import React, { createRef, useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import ZaokruzivanjeForm from "../zadatakForms/ZaokruzivanjeForm";
import Button from "react-bootstrap/Button";
import Rjesenje from "./Rjesenje";
import KratkiOdgovorForm from "../zadatakForms/KratkiOdgovorForm";
import DugiOdgovorForm from "../zadatakForms/DugiOdgovorForm";
import VrstaZadatka from "../inputs/VrstaZadatka";
import BrojZadatka from "../inputs/BrojZadatka";
import BrojBodova from "../inputs/BrojBodova";
import CheckBox from "../inputs/CheckBox";
import FileInput from "../inputs/FileInput";
import {
  getZadatakVrstaList,
  updateZadatak,
  postRjesenje,
  getRjesenja,
  deleteZadatak,
  lock,
  deleteRjesenje,
  getOdjeljakList,
  getKeyByValue,
} from "../functions/ServerFunctions";
import Odjeljak from "../inputs/Odjeljak";
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
  locked,
  odjeljak_id,
}) {
  // VRSTA STATE
  const [vrsta, setVrsta] = useState("Odredi vrstu");
  const [vrstaOptions, setvrstaOptions] = useState([]);
  const [zadatakVrstaList, setZadatakVrstaList] = useState({});

  // ODJELJAK STATE
  const [odjeljak, setOdjeljak] = useState("");
  const [odjeljakOptions, setOdjeljakOptions] = useState([]);
  const [odjeljakList, setOdjeljakList] = useState({});

  // DATA STATE
  const [zadatakBroj, setZadatakBroj] = useState(
    broj_zadatka ? broj_zadatka : 999
  );
  const [zadatakTekst, setZadatakTekst] = useState(
    zadatak_tekst ? zadatak_tekst : {}
  );
  const [brojBodova, setBrojBodova] = useState(broj_bodova ? broj_bodova : 0);
  const [slika, setSlika] = useState("");
  const [primjer, setPrimjer] = useState(primjer_bool ? primjer_bool : false);

  // SET VRSTA
  useEffect(() => {
    if (zadatak_id && vrsta_id) {
      setVrsta(getKeyByValue(zadatakVrstaList, vrsta_id));
    }
    if (zadatak_id && odjeljak_id) {
      setOdjeljak(getKeyByValue(odjeljakList, odjeljak_id));
    }
  }, [zadatakVrstaList]);

  // GET VRSTE
  useEffect(() => {
    getZadatakVrstaList(matura_id).then((data) => {
      setZadatakVrstaList(data);
      setvrstaOptions(Object.keys(data));
    });

    getOdjeljakList(matura_id).then((data) => {
      setOdjeljakList(data);
      setOdjeljakOptions(Object.keys(data));
    });

    updateRjesenja();
  }, []);

  // RJESENJA
  const [rjesenjeList, setRjesenjeList] = useState(
    rjesenja_db ? rjesenja_db : []
  );

  async function onAddRjesenje() {
    let nOfRjesenja = 1;
    let slova = [null];
    if (vrsta === "zaokruzivanje" || nadzadatak === "tekst i zaokruzivanje") {
      nOfRjesenja = prompt("Koliko rjesenja zelis dodat? ");
      slova = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K"];
    }

    for (let i = 0; i < nOfRjesenja; i++) {
      let sl = slova[i];
      await postRjesenje(matura_id, zadatak_id, sl);
    }
    updateRjesenja();
  }

  const updateRjesenja = async () => {
    let rjesenja = await getRjesenja(zadatak_id);

    setRjesenjeList(rjesenja);
  };

  // ON SUBMIT
  const onSubmit = async (e) => {
    e.preventDefault();

    console.log("submit");

    for (let reff of elRefs) {
      reff.current.click();
    }

    updateZadatak(
      zadatak_id,
      zadatakVrstaList[vrsta],
      matura_id,
      zadatakBroj,
      zadatakTekst,
      slika,
      brojBodova,
      primjer,
      odjeljakList[odjeljak]
    ).then(() =>
      lock(zadatak_id, "zadatak").then(() => {
        updateZadatci();
        updateRjesenja();
      })
    );
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
        filePath={slika_path}
        table="zadatak"
        table_id={zadatak_id}
        updateZadatci={updateZadatci}
        deleteType="slika"
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
        filePath={slika_path}
        table="zadatak"
        table_id={zadatak_id}
        updateZadatci={updateZadatci}
        deleteType="slika"
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
        filePath={slika_path}
        table="zadatak"
        table_id={zadatak_id}
        updateZadatci={updateZadatci}
        deleteType="slika"
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
        filePath={slika_path}
        table="zadatak"
        table_id={zadatak_id}
        updateZadatci={updateZadatci}
        deleteType="slika"
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
      <CheckBox
        title="Je li primjer?"
        value={primjer}
        setValue={setPrimjer}
        key={3}
      />,
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
      lock(zadatak_id, "zadatak").then(() => updateZadatci());
    }
  };

  // DELETE ZADATAK
  const delZadatak = () => {
    deleteZadatak(zadatak_id).then(() => updateZadatci());
  };

  const arrLength = rjesenjeList.length;
  const [elRefs, setElRefs] = React.useState([]);

  useEffect(() => {
    // add or remove refs
    setElRefs((elRefs) =>
      Array(arrLength)
        .fill()
        .map((_, i) => elRefs[i] || createRef())
    );
  }, [arrLength]);

  // CLEAR DATA
  const clearData = () => {
    setZadatakBroj(999);
    setZadatakTekst({});
    setSlika("");
    setBrojBodova(0);
    setPrimjer(false);

    updateZadatak(
      zadatak_id,
      zadatakVrstaList[vrsta],
      matura_id,
      zadatakBroj,
      zadatakTekst,
      slika,
      brojBodova,
      primjer
    ).then(() => updateZadatci());

    for (let rjesenje of rjesenjeList) {
      deleteRjesenje(rjesenje.id, false).then(() => updateRjesenja());
    }
  };

  return (
    <div className="zadatakDiv" style={{ zIndex: zIndex }}>
      <div className={`lock ${locked ? "locked" : ""}`} onClick={unlock}></div>
      <div className="z_form">
        {notDeletable ? null : (
          <button className="close" onClick={delZadatak}>
            x
          </button>
        )}
        <Form className="zadatak">
          <h2>Zadatak {zadatakBroj}</h2>

          {nadzadatak ? null : (
            <>
              <VrstaZadatka
                vrstaOptions={vrstaOptions}
                vrsta={vrsta}
                setVrsta={setVrsta}
                clearData={clearData}
              />
              <Odjeljak
                options={odjeljakOptions}
                option={odjeljak}
                setOption={setOdjeljak}
              />
            </>
          )}
          {formatOptions[nadzadatak ? nadzadatak : vrsta]}
        </Form>

        <div className="rjesenje">
          <h2>Rjesenje</h2>
          {rjesenjeList.map((item, i) => {
            return (
              <Rjesenje
                submitChildForm={elRefs[i]}
                key={item.id}
                index={i}
                rjesenje_id={item.id}
                vrsta={vrsta}
                nadzadatak={nadzadatak}
                rjesenje_tekst_db={item.rjesenje_tekst}
                slovo_db={item.slovo}
                tocno_db={item.tocno}
                slika_path_db={item.slika_path}
                broj_bodova_db={item.broj_bodova}
                updateRjesenja={updateRjesenja}
                matura_id={matura_id}
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
        <Button variant="danger" className="z_submit" onClick={onSubmit}>
          Submit
        </Button>
      </div>
    </div>
  );
}
