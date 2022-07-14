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
import Odjeljak from "./inputs/Odjeljak";
import {
  deleteNadzadatak,
  deleteZadatak,
  getNadzadatakVrstaList,
  getNadzadatakZadatci,
  lock,
  postZadatak,
  updateNadzadatak,
  getOdjeljakList,
} from "./ServerFunctions";
import { getKeyByValue } from "./ServerFunctions";
import TextBox from "./inputs/TextBox";

export default function AddNadzadatak({
  matura_id,
  nadzadatak_id,
  vrsta_id,
  broj_nadzadatka,
  nadzadatak_tekst,
  slika_path,
  audio_path,
  updateZadatci,
  locked,
  odjeljak_id,
  task_db,
}) {
  // VRSTA STATE
  const [vrsta, setVrsta] = useState("Odredi vrstu");
  const [nadzadatakVrstaList, setNadzadatakVrstaList] = useState({});
  const [vrstaOptions, setVrstaOptions] = useState([]);

  // ODJELJAK STATE
  const [odjeljak, setOdjeljak] = useState("");
  const [odjeljakOptions, setOdjeljakOptions] = useState([]);
  const [odjeljakList, setOdjeljakList] = useState({});

  // DATA STATE
  const [nadzadatakBroj, setNadzadatakBroj] = useState(
    broj_nadzadatka ? broj_nadzadatka : 0
  );
  const [slika, setSlika] = useState("");
  const [audio, setAudio] = useState("");
  const [tekst, setTekst] = useState(nadzadatak_tekst ? nadzadatak_tekst : {});
  const [task, setTask] = useState(task_db ? task_db : "");

  // SUBMIT
  function submit(e) {
    e.preventDefault();
    console.log("submited");
    updateNadzadatak(
      nadzadatak_id,
      nadzadatakVrstaList[vrsta],
      nadzadatakBroj,
      tekst,
      slika,
      audio,
      matura_id,
      odjeljakList[odjeljak],
      task
    ).then(() =>
      lock(nadzadatak_id, "nadzadatak").then(() => {
        updateZadatci();
        updateNadzadatakZadatci();
      })
    );
  }

  // GET VRSTA
  useEffect(() => {
    if (nadzadatak_id && vrsta_id) {
      setVrsta(getKeyByValue(nadzadatakVrstaList, vrsta_id));
    }
    if (nadzadatak_id && odjeljak_id) {
      setOdjeljak(getKeyByValue(odjeljakList, odjeljak_id));
    }
  }, [nadzadatakVrstaList]);

  // GET VRSTE LIST
  useEffect(() => {
    getNadzadatakVrstaList(matura_id).then((data) => {
      setNadzadatakVrstaList(data);
      setVrstaOptions(Object.keys(data));
    });

    getOdjeljakList(matura_id).then((data) => {
      setOdjeljakList(data);
      setOdjeljakOptions(Object.keys(data));
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
      lock(nadzadatak_id, "nadzadatak").then(() => updateZadatci());
    }
  };

  const clearData = () => {
    setNadzadatakBroj(0);
    setTekst({});
    setSlika("");
    setAudio("");
    setTask("");

    updateNadzadatak(
      nadzadatak_id,
      nadzadatakVrstaList[vrsta],
      nadzadatakBroj,
      tekst,
      slika,
      audio,
      matura_id,
      odjeljakList[odjeljak],
      task
    ).then(() => updateZadatci());

    for (let i = 1; i < zadatciList.length; i++) {
      deleteZadatak(zadatciList[i].id, false).then(() =>
        updateNadzadatakZadatci()
      );
    }
  };

  useEffect(() => {
    console.log(tekst);
  }, [tekst]);

  return (
    <div className=" nadzadatakDiv">
      <div
        className={`lock 
        ${locked ? "locked" : ""}`}
        onClick={unlock}
      ></div>
      <Form onSubmit={(e) => e.preventDefault()}>
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
              clearData={clearData}
            />

            <BrojZadatka
              value={nadzadatakBroj}
              setValue={setNadzadatakBroj}
              title="Broj nadzadatka"
            />

            <Odjeljak
              options={odjeljakOptions}
              option={odjeljak}
              setOption={setOdjeljak}
            />

            <TextBox title="Task" value={task} setValue={setTask} />
            <p className="napomena">npr u maturi iz ENG: Which person...</p>

            <FileInput
              title="Slika"
              type="image/jpeg, image/png"
              value={slika}
              setValue={setSlika}
              filePath={slika_path}
              table="nadzadatak"
              table_id={nadzadatak_id}
              updateZadatci={updateZadatci}
              deleteType="slika"
            />

            <FileInput
              title="Audio"
              type="audio/*, .wma"
              value={audio}
              setValue={setAudio}
              filePath={audio_path}
              table="nadzadatak"
              table_id={nadzadatak_id}
              updateZadatci={updateZadatci}
              deleteType="audio"
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
          <Button variant="danger" onClick={submit} type="submit">
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
              updateZadatci={() => {
                updateNadzadatakZadatci();
                updateZadatci();
              }}
              nadzadatak={vrsta}
              locked={item.islocked}
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
