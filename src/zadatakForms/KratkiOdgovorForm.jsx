import React, { useEffect, useState } from "react";
import TextArea from "../inputs/TextArea";
import TextBox from "../inputs/TextBox";

export default function KratkiOdgovorForm({ value, setValue }) {
  const [tekst, setTekst] = useState(value ? value.tekst : "");

  useEffect(() => {
    setValue({
      tekst: tekst,
    });
  }, [tekst]);

  return (
    <>
      <TextArea title="Tekst zadatka" value={tekst} setValue={setTekst} />
    </>
  );
}
