import { Container } from "./styles";
import{FiHexagon} from "react-icons/fi"
import {Link} from "react-router-dom";
export function Logo ({icon =  <FiHexagon className="icon" 
/>, title,...rest}){

  return(
    <Container {...rest}>
    

      {icon}
      
      <Link to ="/">

      <h1>{title}</h1>
      </Link>
    </Container>
  )
}