import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { deleteCondition, updateCondition } from "../AdminFunctions";
import DropdownComponent from "../DropdownComponent";
import { getPredmetFromPredmetId } from "../ServerFunctions";

export default function Condition({ condition_data, updateConditionList }) {
  const [predmet, setPredmet] = useState(
    condition_data.predmet ? condition_data.predmet : ""
  );

  useEffect(() => {
    if (condition_data.predmet_id) {
      getPredmetFromPredmetId(condition_data.predmet_id).then(setPredmet);
    }
  }, []);

  const predmetOptions = ["hrvatski", "matematika", "engleski"];

  const [sezona, setSezona] = useState(
    condition_data.sezona ? condition_data.sezona : ""
  );
  const sezonaOptions = ["ljeto", "jesen"];

  const [razina, setRazina] = useState(
    condition_data.razina ? condition_data.razina : ""
  );
  const razinaOptions = ["A", "B"];

  const [godinaStart, setGodinaStart] = useState(
    condition_data.godina_start ? condition_data.godina_start : 0
  );
  const [godinaEnd, setGodinaEnd] = useState(
    condition_data.godina_end ? condition_data.godina_end : 0
  );
  const godinaOpitions = [
    2010, 2011, 2012, 2013, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022,
  ];

  const submit = (e) => {
    e.preventDefault();

    updateCondition(
      condition_data.id,
      predmet,
      godinaStart,
      godinaEnd,
      sezona,
      razina
    );
  };

  const delCondition = () => {
    deleteCondition(condition_data.id).then(updateConditionList);
  };
  return (
    <Form className="condition" onSubmit={submit}>
      <h3>Condition</h3>

      <div className="formItem">
        <p>Predmet: </p>
        <DropdownComponent
          optionName="Predmet"
          option={predmet}
          options={predmetOptions}
          setOption={setPredmet}
          clearData={() => {}}
        />
      </div>
      <div className="formItem">
        <p>Sezona: </p>
        <DropdownComponent
          optionName="Sezona"
          option={sezona}
          options={sezonaOptions}
          setOption={setSezona}
          clearData={() => {}}
        />
      </div>
      <div className="formItem">
        <p>Razina: </p>
        <DropdownComponent
          optionName="Razina"
          option={razina}
          options={razinaOptions}
          setOption={setRazina}
          clearData={() => {}}
        />
      </div>
      <div className="formItem">
        <p>Godina start: </p>
        <DropdownComponent
          optionName="Godina start"
          option={godinaStart}
          options={godinaOpitions}
          setOption={setGodinaStart}
          clearData={() => {}}
        />
      </div>
      <div className="formItem">
        <p>Godina end: </p>
        <DropdownComponent
          optionName="Godina end"
          option={godinaEnd}
          options={godinaOpitions}
          setOption={setGodinaEnd}
          clearData={() => {}}
        />
      </div>

      <Button type="submit" variant="primary">
        Submit
      </Button>
      <Button variant="danger" onClick={delCondition}>
        Delete
      </Button>
    </Form>
  );
}
