import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import StupacItem from "./StupacItem";

export default function Povezivanje({ value, setValue }) {
  const [stupac1, setstupac1] = useState(
    Object.keys(value).length ? value.stupac1 : {}
  );
  const [stupac1Index, setstupac1Index] = useState(0);

  const [stupac2, setstupac2] = useState(
    Object.keys(value).length ? value.stupac2 : {}
  );
  const [stupac2Index, setstupac2Index] = useState(0);

  function onAddStupac1() {
    let newItem = {};

    newItem[stupac1Index] = {
      index: stupac1Index,
      slovoBroj: "",
      recenica: "",
    };

    console.log(newItem);
    setstupac1((value) => ({
      ...value,
      ...newItem,
    }));
    setstupac1Index(stupac1Index + 1);
  }

  function onAddStupac2() {
    let newItem = {};

    newItem[stupac2Index] = {
      index: stupac2Index,
      slovoBroj: "",
      recenica: "",
    };
    setstupac2((value) => ({
      ...value,
      ...newItem,
    }));
    setstupac2Index(stupac2Index + 1);
  }

  useEffect(() => {
    setValue({
      stupac1: stupac1,
      stupac2: stupac2,
    });
  }, [stupac1, stupac2]);

  useEffect(() => {
    let maxIndex1 = 0;
    Object.keys(stupac1).forEach((item) => {
      if (parseInt(item) > maxIndex1) {
        maxIndex1 = parseInt(item);
      }
    });

    setstupac1Index(maxIndex1 + 1);

    let maxIndex2 = 0;
    Object.keys(stupac2).forEach((item) => {
      if (parseInt(item) > maxIndex2) {
        maxIndex2 = parseInt(item);
      }
    });

    setstupac2Index(maxIndex2 + 1);
  }, []);

  return (
    <>
      <h5>Stupac 1</h5>
      <br />

      {Object.values(stupac1).map((item, i) => {
        return (
          <StupacItem
            key={item.id}
            index={item.index}
            type="Broj"
            slovoBroj_db={item.slovoBroj}
            recenica_db={item.recenica}
            setValue={setstupac1}
            value={stupac1}
          />
        );
      })}

      <Button variant="danger" onClick={onAddStupac1}>
        Dodaj redak
      </Button>

      <br />
      <br />
      <br />
      <h5>Stupac 2</h5>
      <br />

      {Object.values(stupac2).map((item, i) => {
        return (
          <StupacItem
            key={item.id}
            index={item.index}
            type="Slovo"
            slovoBroj_db={item.slovoBroj}
            recenica_db={item.recenica}
            setValue={setstupac2}
            value={stupac2}
          />
        );
      })}

      <Button variant="danger" onClick={onAddStupac2}>
        Dodaj redak
      </Button>
    </>
  );
}
