import { Link, useParams } from "react-router-dom";
import { api } from "../../../services/api";
import { useState } from "react";
import { useEffect } from "react";

import { CardPreview } from "../../../components/CardPreview"
import { Header } from "../../../components/Header"
import { Footer } from "../../../components/Footer"
import { Section } from "../../../components/Section";
import { AiOutlineArrowLeft } from "react-icons/ai"
import { Container } from "./styles";


export function Details() {
  const [data, setData] = useState('')
  const params = useParams()

  useEffect(() => {
    async function fetchProductDetails() {
      const response = await api.get(`/products/${params.id}`)
      setData(response.data)
    } fetchProductDetails()
  }, [])
  return (
    <Container>
      <Header />
      <Section >
        <Link to='/'>
          <AiOutlineArrowLeft />
          Voltar
        </Link>

        <CardPreview data={data} />

      </Section>
      <Footer />
    </Container>
  )
}