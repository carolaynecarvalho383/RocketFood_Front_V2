import { Button } from "../../../components/Button";
import { Footer } from "../../../components/Footer";
import { Header } from "../../../components/Header";
import { Input } from "../../../components/Input";

import { Container,Form } from "./styles";

export function Address() {

  return (
    <Container>
      <Header />
      <Form>
        <Input placeholder="Cep" />
        <Input placeholder ="Endereço" />
        <Input placeholder="Numero"/>
        <Input placeholder="Complemento"/>
        <Input placeholder="Bairro"/>
        <Input placeholder="Cidade"/>
        <Input placeholder="Estado"/>

        <Button title="Salvar" />
      </Form>
      <Footer />
    </Container>
  )
}