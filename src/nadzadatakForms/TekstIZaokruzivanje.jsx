import React, { useEffect, useState } from "react";
import TextBox from "../inputs/TextBox";
import TextArea from "../inputs/TextArea";

export default function TekstIZaokruzivanje({ value, setValue }) {
  const [naslov, setNaslov] = useState(
    Object.keys(value).length ? value.naslov : ""
  );
  const [tekst, setTekst] = useState(
    Object.keys(value).length ? value.tekst : ""
  );
  const [footnote, setFootnote] = useState(
    Object.keys(value).length ? value.footnote : ""
  );

  useEffect(() => {
    setValue({
      naslov: naslov,
      tekst: tekst,
      footnote: footnote,
    });
  }, [naslov, tekst, footnote]);

  return (
    <>
      <TextBox title="Naslov" value={naslov} setValue={setNaslov} />

      <TextArea title="Tekst" value={tekst} setValue={setTekst} />

      <p className="napomena">
        NAPOMENA: oko boldanih rijeci stavi znakove **<span>primjer</span>**
      </p>
      <p className="napomena">
        NAPOMENA: oko footnote brojeva stavi znakove *!<span>primjer</span>*!
      </p>

      <TextArea title="Footnote" value={footnote} setValue={setFootnote} />
    </>
  );
}
