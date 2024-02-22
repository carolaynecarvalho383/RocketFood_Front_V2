import { Header } from "../../../components/Header";
import { Footer } from "../../../components/Footer";
import { Section } from "../../../components/Section";
import { Card } from "../../../components/Card";
import { api } from "../../../services/api";
import { Container, Gallery } from "./styles";
import { useEffect, useState } from "react";


export function Favorites() {
  const [datas, setDatas] = useState('')

  useEffect(() => {
    async function fetchFavorites() {
      const response = await api.get("/favorites");
      setDatas(response.data);
    }
    fetchFavorites()

  }, [])
  return (
    <Container>
      <Header />
      <Section>
        <Gallery>
          {
            datas &&
            datas.map(data => (
              <Card key={String(data.id)}
                data={data}
                isFavorite={true}
                />
            ))
          }
        </Gallery>
      </Section>
      <Footer />
    </Container>
  )
}