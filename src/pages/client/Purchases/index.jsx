import { Header } from "../../../components/Header";
import { Footer } from "../../../components/Footer";
import { Section } from "../../../components/Section";
import { Table } from "../../../components/Table";
import { Container } from "./styles";
import { useEffect, useState } from "react";
import { api } from "../../../services/api";

export function Purchases() {
  const [data, setData] = useState('')


  useEffect(()=>{
    async function fetchPurchases() {
      const response = await api.get(`/requests`)
      setData(response.data)
    }
    fetchPurchases()
  },[])
  return (
    <Container>
      <Header />

      <Section title="Pedidos">
        <Table data={data} />
      </Section>

      <Footer />
    </Container>
  )
}