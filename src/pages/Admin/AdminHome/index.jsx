import { Footer } from "../../../components/Footer"
import { Header } from "../../../components/Header"
import { Section } from "../../../components/Section"
import { Card } from "../../../components/Card"
import { Carousel } from "../../../components/Carousel"
import { api } from "../../../services/api"

import banner from "../../../assets/banner.svg";

import { Container, Main } from "./styles"
import { useState, useEffect } from "react"


export function Adm() {
  const [data, setData] = useState([])
  const [search, setSearch] = useState('')

  const drinks = data.filter(products => products.category == "bebidas")
  const desserts = data.filter(products => products.category == "sobremesas")
  const mainDishes = data.filter(products => products.category == "pratosPrincipais")
  const other = data.filter(products => products.category == "outros")


  useEffect(() => {
    async function fetchProducts() {
      const response = await api.get(`/loadProduct`)
      setData(response.data)

    } fetchProducts()

  }, [])

  useEffect(() => {
    async function fetchSearch() {
      const response = await api.get(`/products?title=${search}&ingredients${search}`)
      setData(response.data)

    }
    fetchSearch()

  }, [search])

  return (
    <Container>
      <Header onChange={e => setSearch(e.target.value)} />
      <Main>
        <div>
          <img src={banner} alt="aaaaanp" />
        </div>
        <div>
          <h1>Sabores inigualáveis</h1>
          <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
        </div>
      </Main>
      <Section title="Pratos Principais">
        <Carousel data={mainDishes} />
      </Section>

      <Section title="Sobremesas">
        <Carousel data={desserts} />
      </Section>

      <Section title="Bebidas">
        <Carousel data={drinks} />
      </Section>

      {other.length === 0 ? '' : <Section title="Outros">
        <Carousel data={other} />
      </Section>
      }
      <Footer />
    </Container>
  )
}