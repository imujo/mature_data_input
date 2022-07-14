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
    getZadatakAll(maturaId).then((zadatci) => {
      setZadatciList(zadatci);
      console.log("update zadatci");
    });
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
          clearData={() => {}}
        ></DropdownComponent>
        <DropdownComponent
          options={godinaOpitions}
          option={godina ? godina : "Godina"}
          setOption={setGodina}
          optionName={"godina"}
          disabled={isMaturaSubmitted}
          clearData={() => {}}
        ></DropdownComponent>
        <DropdownComponent
          options={razinaOptions}
          option={razina}
          setOption={setRazina}
          optionName={"razina"}
          disabled={isMaturaSubmitted}
          clearData={() => {}}
        ></DropdownComponent>
        <DropdownComponent
          options={sezonaOptions}
          option={sezona}
          setOption={setSezona}
          optionName={"sezona"}
          disabled={isMaturaSubmitted}
          clearData={() => {}}
        ></DropdownComponent>
        <Button variant="danger" onClick={submit}>
          Submit
        </Button>
      </div>
      <h3 className="matura_name">{matura}</h3>

      {zadatciList.map((item, i) => {
        let odjeljakId;

        if (item.odjeljak_id) {
          odjeljakId = item.odjeljak_id;
        } else if (i > 0) {
          let lastOdjeljakId = zadatciList[i - 1].odjeljak_id;
          if (lastOdjeljakId) {
            odjeljakId = lastOdjeljakId;
          }
        }
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
              odjeljak_id={odjeljakId}
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
              odjeljak_id={odjeljakId}
              task_db={item.task}
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
