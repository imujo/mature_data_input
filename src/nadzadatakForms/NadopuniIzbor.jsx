import React, { useEffect, useState } from "react";
import Recenice from "./Recenice";
import Button from "react-bootstrap/Button";
import TextBox from "../inputs/TextBox";
import TextArea from "../inputs/TextArea";

export default function NadopuniIzbor({ value, setValue, napomena }) {
  const [naslov, setNaslov] = useState(
    Object.keys(value).length ? value.naslov : ""
  );
  const [tekst, setTekst] = useState(
    Object.keys(value).length ? value.tekst : ""
  );

  const [receniceList, setreceniceList] = useState(
    Object.keys(value).length ? value.recenice : {}
  );
  const [receniceListIndex, setreceniceListIndex] = useState(0);

  function onAddRecenica() {
    let newItem = {};

    newItem[receniceListIndex] = {
      index: receniceListIndex,
      slovo: "",
      recenica: "",
      primjer: false,
    };

    setreceniceList((value) => ({
      ...value,
      ...newItem,
    }));

    setreceniceListIndex(receniceListIndex + 1);
  }

  useEffect(() => {
    let maxIndex = 0;
    Object.keys(receniceList).forEach((item) => {
      if (parseInt(item) > maxIndex) {
        maxIndex = parseInt(item);
      }
    });

    setreceniceListIndex(maxIndex + 1);
  }, []);

  useEffect(() => {
    setValue({
      tekst: tekst,
      naslov: naslov,
      recenice: receniceList,
    });
  }, [tekst, naslov, receniceList]);

  return (
    <>
      <TextBox title="Naslov" value={naslov} setValue={setNaslov} />

      <TextArea title="Tekst" value={tekst} setValue={setTekst} />

      {napomena ? (
        <p className="napomena">
          NAPOMENA: Zamijeni npr. (19)____ sa{" "}
          <span className="bold"> %%19%%</span>
        </p>
      ) : null}
      <br />

      {Object.values(receniceList).map((item, i) => {
        return (
          <Recenice
            key={item.index}
            index={item.index}
            slovo_db={item.slovo}
            recenica_db={item.recenica}
            primjer_db={item.primjer}
            value={receniceList}
            setValue={setreceniceList}
          />
        );
      })}

      <Button variant="danger" onClick={onAddRecenica}>
        Dodaj recenicu
      </Button>
    </>
  );
}
