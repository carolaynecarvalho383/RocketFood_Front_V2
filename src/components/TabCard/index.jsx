import { Container } from "./styles";
import { api } from "../../services/api";
import {ConvertNumberStringForMoney} from "../../utils/ConvertNumberStringForMoney"

export function TabCard({ data = {}, ...rest }) {



  return (
    <Container>
      <img src={`${api.defaults.baseURL}/files/${data.image}`} alt="" />
      <div>
        <p>{data.amount}x {data.title} <small>{ConvertNumberStringForMoney(data.totalPrice)}</small></p>
        <button {...rest}
        >Excluir</button>
      </div>
    </Container>
  )
}