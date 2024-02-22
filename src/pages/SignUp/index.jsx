import { Link, useNavigate } from "react-router-dom";
import { useState } from "react"
import { useEffect } from "react";

import { api } from "../../services/api";

import { Input } from "../../components/Input";
import { Logo } from "../../components/Logo";
import { Section } from "../../components/Section";
import { Button } from "../../components/Button";

import { Container, Form } from "./styles";

export function SignUp() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  function handleSignIn(e) {
    e.preventDefault()
    
    if (!name || !email || !password) {
      alert("Preencha todos os campos!");
      return;
    }

    api.post("/users", {
      name,
      email,
      password
    }).then(() => {
      alert("Usuário cadastrado com sucesso!");
      navigate("/");
    })
    .catch(error => {
      if(error.response){
        alert(error.response.data.message);
      }else{
        alert("Não doi possível cadastrar")
      }
    })
  }

  return (
    <Container>
      <Logo title="Food Explorer" />
      <Section title=" Faça Login">
        <Form >
          <Input name="nome"
            placeholder=" seu nome"
            onChange={event => setName(event.target.value)} />

          <Input name="email"
            placeholder="exemplo@exemplo.com"
            onChange={event => setEmail(event.target.value)} />

          <Input name="senha"
            type="password"
            placeholder="No mínimo 6 caracteres"
            onChange={event => setPassword(event.target.value)} />

          <Button title="Registrar"
            onClick={e=>handleSignIn(e)} />
          <Link to="/">Já tenho uma conta</Link>
        </Form>
      </Section>
    </Container>
  )
}