import React, { useEffect, useState } from "react";
import CheckBox from "../inputs/CheckBox";
import Slovo from "../inputs/Slovo";
import TextBox from "../inputs/TextBox";

export default function Recenice({
  index,
  slovo_db,
  recenica_db,
  primjer_db,
  setValue,
  value,
}) {
  const [slovo, setSlovo] = useState(slovo_db ? slovo_db : "");
  const [recenica, setRecenica] = useState(recenica_db ? recenica_db : "");
  const [primjer, setPrimjer] = useState(primjer_db ? primjer_db : false);

  useEffect(() => {
    let updatedValue = {};
    updatedValue[index] = {
      index: index,
      slovo: slovo,
      recenica: recenica,
      primjer: primjer,
    };

    setValue((value) => ({
      ...value,
      ...updatedValue,
    }));
  }, [slovo, recenica, primjer]);

  const removeRecenica = (index) => {
    let copiedValue = { ...value };
    delete copiedValue[index];
    setValue(() => ({
      ...copiedValue,
    }));
  };

  return (
    <div className="recenice border_bottom">
      <button
        className="close close_rjesenje"
        onClick={() => removeRecenica(index)}
      >
        x
      </button>
      <Slovo title="Slovo" value={slovo} setValue={setSlovo} />

      <TextBox title="Recenica" value={recenica} setValue={setRecenica} />

      <CheckBox title="Je li primjer?" value={primjer} setValue={setPrimjer} />
    </div>
  );
}
