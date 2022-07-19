import React from "react";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { registerUser } from "./AuthFunctions";
import TextBox from "./inputs/TextBox";

export default function Register() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  let navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();

    registerUser(firstname, lastname, username, password).then(() => {
      navigate("/admin");
      navigate(0);
    });
  };

  return (
    <main className="register">
      <h1>Register</h1>

      <Form onSubmit={submit}>
        <TextBox title="First Name" value={firstname} setValue={setFirstname} />
        <TextBox title="Last Name" value={lastname} setValue={setLastname} />
        <TextBox title="Username" value={username} setValue={setUsername} />
        <TextBox title="Password" value={password} setValue={setPassword} />

        <Button variant="danger" type="submit">
          Register
        </Button>
      </Form>
    </main>
  );
}
