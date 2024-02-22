import { Container } from "./styles";
import { AiOutlineSearch } from "react-icons/ai"
import { Input } from "../Input"

export function SearchBar({...rest}) {

  return (
    <Container>
      <label htmlFor="search">
        <AiOutlineSearch color="#FFFFFF" />
      </label>
      <input id="search"
        type="text"
        placeholder="Busque opções de pratos"
        {...rest} />
    </Container>
  )
}