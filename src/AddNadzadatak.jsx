import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import TekstIZaokruzivanje from "./nadzadatakForms/TekstIZaokruzivanje";
import PovezivanjeTekstovi from "./nadzadatakForms/PovezivanjeTekstovi";
import NadopuniIzbor from "./nadzadatakForms/NadopuniIzbor";
import NadopuniSlobodno from "./nadzadatakForms/NadopuniSlobodno";
import Povezivanje from "./nadzadatakForms/Povezivanje";
import { Button } from "react-bootstrap";
import AddZadatak from "./AddZadatak";
import VrstaZadatka from "./inputs/VrstaZadatka";
import BrojZadatka from "./inputs/BrojZadatka";
import FileInput from "./inputs/FileInput";
import {
  deleteNadzadatak,
  getNadzadatakVrstaList,
  getNadzadatakZadatci,
  postZadatak,
  updateNadzadatak,
} from "./ServerFunctions";
import { getKeyByValue } from "./ServerFunctions";

export default function AddNadzadatak({
  matura_id,
  nadzadatak_id,
  vrsta_id,
  broj_nadzadatka,
  nadzadatak_tekst,
  slika_path,
  audio_path,
  updateZadatci,
}) {
  // VRSTA STATE
  const [vrsta, setVrsta] = useState("Odredi vrstu");
  const [nadzadatakVrstaList, setNadzadatakVrstaList] = useState({});
  const [vrstaOptions, setVrstaOptions] = useState([]);

  // DATA STATE
  const [nadzadatakBroj, setNadzadatakBroj] = useState(
    broj_nadzadatka ? broj_nadzadatka : 0
  );
  const [slika, setSlika] = useState(slika_path ? slika_path : "");
  const [audio, setAudio] = useState(audio_path ? audio_path : "");
  const [tekst, setTekst] = useState(nadzadatak_tekst ? nadzadatak_tekst : {});

  const [locked, setLocked] = useState(false);

  // SUBMIT
  function submit(e) {
    e.preventDefault();

    updateNadzadatak(
      nadzadatak_id,
      nadzadatakVrstaList[vrsta],
      nadzadatakBroj,
      tekst,
      slika,
      audio
    );
    setLocked(true);
  }

  // GET VRSTA
  useEffect(() => {
    if (nadzadatak_id && vrsta_id) {
      setVrsta(getKeyByValue(nadzadatakVrstaList, vrsta_id));
    }
  }, [nadzadatakVrstaList]);

  // GET VRSTE LIST
  useEffect(() => {
    getNadzadatakVrstaList().then((data) => {
      setNadzadatakVrstaList(data);
      setVrstaOptions(Object.keys(data));
    });
  }, []);

  // ZADATCI
  const [zadatciList, setZadatciList] = useState([]);

  const updateNadzadatakZadatci = () => {
    getNadzadatakZadatci(nadzadatak_id).then((zadatci) => {
      setZadatciList(zadatci);
    });
  };

  useEffect(() => {
    updateNadzadatakZadatci();

    if (vrsta_id) {
      setLocked(true);
    }
  }, []);

  function onAddZadatak() {
    postZadatak(matura_id, nadzadatak_id).then(() => {
      updateNadzadatakZadatci();
    });
  }

  const delNadzadatak = () => {
    deleteNadzadatak(nadzadatak_id).then(() => updateZadatci());
  };

  // UNLOCK
  const unlock = () => {
    if (window.confirm("Zelis li otkljucat zadatak?")) {
      setLocked(false);
    }
  };

  return (
    <div className=" nadzadatakDiv">
      <div
        className={`lock 
        ${locked ? "locked" : ""}`}
        onClick={unlock}
      ></div>
      <Form onSubmit={submit}>
        <div className="z_form">
          <div className="nadzadatak">
            <button className="close" onClick={delNadzadatak}>
              x
            </button>
            <h2>Nadzadatak {nadzadatakBroj ? nadzadatakBroj : null}</h2>

            <VrstaZadatka
              vrstaOptions={vrstaOptions}
              vrsta={vrsta}
              setVrsta={setVrsta}
            />

            <BrojZadatka
              value={nadzadatakBroj}
              setValue={setNadzadatakBroj}
              title="Broj nadzadatka"
            />

            <FileInput
              title="Slika"
              type="image/jpeg, image/png"
              value={slika}
              setValue={setSlika}
            />

            <FileInput
              title="Audio"
              type=".mp3,audio/*"
              value={audio}
              setValue={setAudio}
            />

            {vrsta !== "" ? (
              <img
                src={`./${vrsta}.png`}
                alt="primjer"
                className="primjerImage"
              />
            ) : null}
          </div>

          <div className="nadzadatakVrstaDiv">
            <h2>Tekst</h2>
            {vrsta === "tekst i zaokruzivanje" ? (
              <TekstIZaokruzivanje value={tekst} setValue={setTekst} />
            ) : null}

            {vrsta === "povezivanje tekstovi" ? (
              <PovezivanjeTekstovi value={tekst} setValue={setTekst} />
            ) : null}

            {vrsta === "nadopuni izbor" ? (
              <NadopuniIzbor value={tekst} setValue={setTekst} />
            ) : null}

            {vrsta === "nadopuni slobodno" ? (
              <NadopuniSlobodno value={tekst} setValue={setTekst} />
            ) : null}

            {vrsta === "povezivanje" ? (
              <Povezivanje value={tekst} setValue={setTekst} />
            ) : null}
          </div>
        </div>

        <div className="z_submitDiv">
          <Button variant="danger" type="submit" className="z_submit">
            Submit
          </Button>
        </div>
      </Form>
      <div className="nz_zadatciDiv">
        {zadatciList.map((item, i) => {
          return (
            <AddZadatak
              key={i}
              zadatak_id={item.id}
              vrsta_id={item.vrsta_id}
              broj_zadatka={item.broj_zadatka}
              zadatak_tekst={item.zadatak_tekst}
              slika_path={item.slika_path}
              broj_bodova={item.broj_bodova}
              primjer_bool={item.primjer}
              matura_id={matura_id}
              updateZadatci={updateZadatci}
              nadzadatak={vrsta}
              notDeletable={i === 0}
              zIndex={2}
            />
          );
        })}
      </div>
      <div className="nz_buttons">
        <Button variant="danger" onClick={onAddZadatak} disabled={!vrsta}>
          Dodaj zadatak
        </Button>
      </div>
    </div>
  );
}
