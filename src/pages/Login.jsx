import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { logIn } from "../functions/AuthFunctions";
import TextBox from "../inputs/TextBox";
import { useNavigate } from "react-router-dom";

export default function Login() {
  let navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const submit = async (e) => {
    e.preventDefault();

    let response = await logIn(username, password);
    console.log(response);
    if (response.isSuccess) {
      navigate("/");
      navigate(0);
    } else {
      alert(`Error: ${response.msg}`);
    }
  };
  return (
    <main>
      <Form onSubmit={submit}>
        <TextBox title="Username" value={username} setValue={setUsername} />
        <TextBox title="Password" value={password} setValue={setPassword} />
        <Button type="submit" variant="danger">
          Log in
        </Button>
      </Form>
    </main>
  );
}
