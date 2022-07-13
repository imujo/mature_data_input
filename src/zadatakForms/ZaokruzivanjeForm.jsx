import React, { useEffect, useState } from "react";
import TextArea from "../inputs/TextArea";
import TextBox from "../inputs/TextBox";

export default function ZaokruzivanjeForm({ value, setValue }) {
  const [tekst, setTekst] = useState(
    Object.keys(value).length ? value.tekst : ""
  );
  const [citat, setCitat] = useState(
    Object.keys(value).length ? value.citat : ""
  );

  useEffect(() => {
    let text = {
      tekst: tekst,
      citat: citat,
    };

    setValue(text);
  }, [tekst, citat]);

  return (
    <>
      <TextArea title="Tekst zadatka" value={tekst} setValue={setTekst} />
      <TextArea title="Citat" value={citat} setValue={setCitat} />
    </>
  );
}
