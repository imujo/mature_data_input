import React, { useEffect, useState } from "react";
import Slovo from "../inputs/Slovo";
import TextBox from "../inputs/TextBox";

export default function StupacItem({
  index,
  type,
  slovoBroj_db,
  recenica_db,
  setValue,
  value,
}) {
  const [slovoBroj, setSlovoBroj] = useState(slovoBroj_db ? slovoBroj_db : "");
  const [recenica, setRecenica] = useState(recenica_db ? recenica_db : "");

  useEffect(() => {
    let updatedValue = {};
    updatedValue[index] = {
      index: index,
      slovoBroj: slovoBroj,
      recenica: recenica,
    };

    setValue((value) => ({
      ...value,
      ...updatedValue,
    }));
  }, [slovoBroj, recenica]);

  const removeStupacItem = (index) => {
    let copiedValue = { ...value };
    delete copiedValue[index];
    setValue(() => ({
      ...copiedValue,
    }));
  };

  return (
    <div className="stupacItem">
      <button
        className="close close_rjesenje"
        onClick={() => removeStupacItem(index)}
      >
        x
      </button>
      {index}
      <Slovo title={type} value={slovoBroj} setValue={setSlovoBroj} />

      <TextBox title="Recenica" value={recenica} setValue={setRecenica} />
    </div>
  );
}
