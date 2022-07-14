import React, { useEffect, useState } from "react";
import PersonTekst from "./PersonTekst";
import Button from "react-bootstrap/Button";

export default function PovezivanjeTekstovi({ value, setValue }) {
  const [osobeList, setosobeList] = useState(
    Object.keys(value).length ? value : {}
  );
  const [osobeListIndex, setosobeListIndex] = useState(0);

  function onAddOsoba() {
    let newItem = {};

    newItem[osobeListIndex] = {
      index: osobeListIndex,
      tekst: "",
      slovo: "",
      ime: "",
    };

    setosobeList((value) => ({
      ...value,
      ...newItem,
    }));

    setosobeListIndex(osobeListIndex + 1);
  }

  useEffect(() => {
    let maxIndex = 0;
    Object.keys(osobeList).forEach((item) => {
      console.log(item);
      if (parseInt(item) > maxIndex) {
        maxIndex = parseInt(item);
      }
    });

    setosobeListIndex(maxIndex + 1);
  }, []);

  useEffect(() => {
    setValue(osobeList);
  }, [osobeList]);

  return (
    <>
      {Object.values(osobeList).map((item, i) => {
        return (
          <PersonTekst
            key={item.index}
            index={item.index}
            slovo_db={item.slovo}
            ime_db={item.ime}
            tekst_db={item.tekst}
            setValue={setosobeList}
            value={osobeList}
          />
        );
      })}

      <Button variant="danger" onClick={onAddOsoba}>
        Dodaj osobu
      </Button>
    </>
  );
}
