import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/auth"

import { Logo } from "../Logo"
import { Button } from "../Button"
import { SearchBar } from "../SearchBar"

import { api } from "../../services/api";

import avatarPlaceholder from "../../assets/avatar_placeholder.svg";
import { AiFillShopping, AiOutlineHeart, AiOutlineUser } from "react-icons/ai"
import { ImExit } from "react-icons/im"
import { FiHexagon } from "react-icons/fi"

import { Container, Nav } from "./styles";
import { useEffect } from "react";
import { useState } from "react";


export function Header({ addCart, ...rest }) {
  const { signOut, user, admin, } = useAuth()
  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;
  const [cart, setCart] = useState('')

  useEffect(() => {
    async function fetchPurchases() {
      const response = await api.get('/purchases');
      setCart(response.data.length)
    }
    fetchPurchases()
  }, [addCart])

  return (
    <Container>
      <header>

        <Logo className="logo"
          icon={<FiHexagon className="icon2" size={25} />}
          title="Food Explorer"
        />
        <SearchBar {...rest} />
        <Nav>
          {!admin ?
            <Link to="/favorites">
              <AiOutlineHeart color="#750310" />
              Favoritos
            </Link> :
            <Link to="/administrator">
              <AiOutlineUser />
              Administrador
            </Link>}
          {!admin ?
            <Link to="/buy" >
              <Button icon={<AiFillShopping size={25} />}
                className="myRequestes"
                title={`Meus Pedido (${cart})`} />
            </Link>
            :
            <Link to="/allRequests" >
              <Button icon={<AiFillShopping size={25} />}
                className="myRequestes"
                title={`Todos Pedido `} />
            </Link>
          }
          {!admin ? <Link to="/buy" >
            <Button icon={<AiFillShopping size={15} />}
              className="openButtonRequests"
              title={`(${cart})`} />
          </Link>
            :
            <Link to="/allRequests" >
              <Button icon={<AiFillShopping size={15} />}
                className="openButtonRequests"
              />
            </Link>
          }
          <Link to="/profile">
            <img src={avatarUrl} />
          </Link>

          <Link to="/" onClick={signOut}>
            <ImExit color="#FFFFFF" size={25} />
          </Link>
        </Nav>

      </header>

    </Container>
  )
}


