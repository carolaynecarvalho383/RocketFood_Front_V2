import { Container, Purchases } from "./styles";
import { AiOutlineHeart, AiOutlinePlus, AiOutlineLine, AiFillHeart, AiOutlineEdit } from "react-icons/ai";
import { Button } from "../Button";
import { useEffect, useState } from "react";
import { useAuth } from "../../hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../../services/api";

import {ConvertNumberStringForMoney} from '../../utils/ConvertNumberStringForMoney'

export function Card({ isFavorite = false , data, ...rest }) {
  const [counter, setCounter] = useState(1)
  const [favorite, setFavorite] = useState(isFavorite)
  const { admin } = useAuth()
  const navigate = useNavigate()

  function handlePlus() {
    setCounter(counter + 1)
  }
  function handleLess() {
    setCounter(counter - 1)
    counter <= 1 ? setCounter(1) : setCounter(counter - 1)
  }
  async function handleAddFavorite(id) {
    setFavorite(true)
     await api.post(`/favorites/${id}`)

  }
  async function handleRemoveFavorite(id) {
    setFavorite(false)
    await api.delete(`/favorites/${id}`)

  }
  function handleEditProduct(id) {
    navigate(`/edit/${id}`)

  }
 async function handleAddCart(id){
  await api.post(`/purchases/${id}`,{amount: counter} )
  alert('Produto adicionado no carrinho')
  return
 }
  function handlePreview(id) {
    navigate(`/requestDetails/${id}`)
  }

  return (
    <Container {...rest}>
      {
        admin ?
          <AiOutlineEdit
            size={25}
            onClick={() => { handleEditProduct(data.id) }}
          />
          :
          favorite ?
            <AiFillHeart
              size={25}
              color={"#92000E"}
              onClick={() => handleRemoveFavorite(data.id)}


            /> : <AiOutlineHeart
              size={25}
              onClick={() => handleAddFavorite(data.id)}
            />
      }
            <Link to ={`/details/${data.id}`}>

      <img src={
        `${api.defaults.baseURL}/files/${data.image}`
      } alt="product image" />        </Link>

       <Link to ={`/details/${data.id}`}>
      <h3>{data.title}</h3>
        </Link>
      <p>{data.description}</p>
      <strong>{ConvertNumberStringForMoney(data.price)}</strong>
      <Purchases>
        < AiOutlinePlus size={25}
          onClick={handlePlus}
          className="plus" />
        {counter}
        <AiOutlineLine size={25}
          className="less"
          onClick={handleLess}

        />
        <Button title=" Incluir" 
        onClick={()=>handleAddCart(data.id)}/>
      </Purchases>
    </Container>
  )
}