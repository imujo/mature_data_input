import React, { useEffect, useState } from "react";
import DropdownComponent from "./DropdownComponent";
import Button from "react-bootstrap/Button";
import AddZadatak from "./AddZadatak";
import AddNadzadatak from "./AddNadzadatak";
import {
  getMaturaId,
  getPredmetiList,
  getZadatakAll,
  postNadzadatak,
  postZadatak,
} from "./ServerFunctions";
import { useSearchParams } from "react-router-dom";

export default function Matura() {
  // SEARCH PARAMS
  const [searchParams] = useSearchParams();

  // PREDMET STATE
  const [predmetOptions, setPredmetOptions] = useState([]);
  const [predmetiList, setPredmetiList] = useState([]);
  const [predmet, setPredmet] = useState(
    searchParams.get("predmet") ? searchParams.get("predmet") : ""
  );

  // GODINA STATE
  const godinaOpitions = [
    2010, 2011, 2012, 2013, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022,
  ];
  const [godina, setGodina] = useState(
    searchParams.get("godina") ? searchParams.get("godina") : 0
  );

  // RAZINA STATE
  const razinaOptions = ["A", "B"];
  const [razina, setRazina] = useState(
    searchParams.get("razina") ? searchParams.get("razina") : ""
  );

  // SEZONA STATE
  const sezonaOptions = ["ljeto", "jesen"];
  const [sezona, setSezona] = useState(
    searchParams.get("sezona") ? searchParams.get("sezona") : ""
  );

  // MATURA STATE
  const [matura, setMatura] = useState("");
  const [maturaId, setMaturaId] = useState(0);

  // SUBMIT MATURA
  const submit = () => {
    getMaturaId(predmetiList[predmet], godina, razina, sezona).then((id) => {
      if (id) {
        console.log(id);
        setMatura([predmet, godina, razina, sezona].join(" - "));
        setMaturaId(id);
        setIsMaturaSubmitted(true);

        getZadatakAll(id).then((data) => setZadatciList(data));
      }
    });
  };
  const [isMaturaSubmitted, setIsMaturaSubmitted] = useState(false);

  // SET PREDMETI
  useEffect(() => {
    getPredmetiList().then((data) => {
      setPredmetiList(data);
      setPredmetOptions(Object.keys(data));
    });
  }, []);

  // ZADATCI
  const [zadatciList, setZadatciList] = useState([]);

  function onAddZadatak(type) {
    if (type === "zadatak") {
      postZadatak(maturaId).then(() => {
        updateZadatci();
      });
    } else if (type === "nadzadatak") {
      console.log("nadzadatak");
      postNadzadatak(maturaId).then(() => {
        updateZadatci();
      });
    }
  }

  const updateZadatci = () => {
    getZadatakAll(maturaId).then((zadatci) => setZadatciList(zadatci));
  };

  return (
    <main>
      <div className="choose_matura">
        <DropdownComponent
          options={predmetOptions}
          option={predmet}
          setOption={setPredmet}
          optionName={"predmet"}
          disabled={isMaturaSubmitted}
        ></DropdownComponent>
        <DropdownComponent
          options={godinaOpitions}
          option={godina ? godina : "Godina"}
          setOption={setGodina}
          optionName={"godina"}
          disabled={isMaturaSubmitted}
        ></DropdownComponent>
        <DropdownComponent
          options={razinaOptions}
          option={razina}
          setOption={setRazina}
          optionName={"razina"}
          disabled={isMaturaSubmitted}
        ></DropdownComponent>
        <DropdownComponent
          options={sezonaOptions}
          option={sezona}
          setOption={setSezona}
          optionName={"sezona"}
          disabled={isMaturaSubmitted}
        ></DropdownComponent>
        <Button variant="danger" onClick={submit}>
          Submit
        </Button>
      </div>
      <h3 className="matura_name">{matura}</h3>

      {zadatciList.map((item, i) => {
        if (item.type === "zadatak") {
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
              matura_id={maturaId}
              updateZadatci={updateZadatci}
              locked={item.islocked}
            />
          );
        } else if (item.type === "nadzadatak") {
          return (
            <AddNadzadatak
              key={i}
              nadzadatak_id={item.id}
              vrsta_id={item.vrsta_id}
              broj_nadzadatka={item.broj_nadzadatka}
              nadzadatak_tekst={item.nadzadatak_tekst}
              slika_path={item.slika_path}
              audio_path={item.audio_path}
              matura_id={maturaId}
              locked={item.islocked}
              updateZadatci={updateZadatci}
            />
          );
        }

        return "";
      })}
      <div className="dodajButtons">
        <Button
          variant="danger"
          onClick={() => onAddZadatak("zadatak")}
          disabled={!maturaId}
        >
          Dodaj zadatak
        </Button>

        <Button
          variant="danger"
          onClick={() => onAddZadatak("nadzadatak")}
          disabled={!maturaId}
        >
          Dodaj nadzadatak
        </Button>
      </div>
    </main>
  );
}
