import { useState } from "react";
import { Link } from "react-router-dom"

import { useAuth } from "../../hooks/auth"

import { Input } from "../../components/Input";
import { Logo } from "../../components/Logo";
import { Section } from "../../components/Section";
import { Button } from "../../components/Button";

import { Container, Form } from "./styles";

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const { signIn } = useAuth()

  function handleSignIn(e) {
    e.preventDefault()
    signIn({email, password})
  }


  return (
    <Container>
      <Logo title="Food Explorer" className="main-logo" />
      <Section title=" Faça Login">

        <Form >
          <Input name="email"
            placeholder="exemplo@exemplo.com"
            onChange={e => setEmail(e.target.value)} />

          <Input name="senha"
            type="password"
            placeholder="No mínimo 6 caracteres"
            onChange={e => setPassword(e.target.value)} />

          <Button title=" Entrar"
            onClick={handleSignIn} />

          <Link to="/register">Criar Conta</Link>
        </Form>
      </Section>

    </Container>
  )
}