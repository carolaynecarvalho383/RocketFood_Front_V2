import { Button } from "../../../components/Button";
import { Footer } from "../../../components/Footer";
import { Header } from "../../../components/Header";
import { Input } from "../../../components/Input";
import { Container } from "./styles";

export function Payment() {

  return (
    <Container>
      <Header />
      <form action="">
        <Input />
        <div>
          <Input type="date"
            placeholder="02/2022" />
          <Input type="number"
            placeholder="CVC" />
        </div>
        <Button title="Adicionar" />
      </form>
      <Footer />
    </Container>
  )
}