import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { api } from "../../../services/api";

import { Footer } from "../../../components/Footer";
import { Header } from "../../../components/Header";
import { Section } from "../../../components/Section";


import { ConvertNumberStringForMoney } from "../../../utils/ConvertNumberStringForMoney"
import { BiTimeFive, BiCheckCircle } from "react-icons/bi"
import { GiKnifeFork} from "react-icons/gi"
import { Container, StatusContainer, TaBRequestItem } from "./styles";

export function RequestDetails() {
  const [purchases, setPurchases] = useState({})

  const params = useParams()

  useEffect(() => {
    async function fetchRequestDetails() {
      const response = await api.get(`/requests/${params.id}`)
      setPurchases(response.data)
    } fetchRequestDetails()
  }, [])

  return (
    <Container>
      <Header />
      <main>
        <Section title={purchases.length > 1 ? "Meus pedidos" : "Meu pedido"}>
          <ul>
            {purchases.requestsItem &&
              purchases.requestsItem.map(purchase => (
                <li key={String(purchase.id)}>
                  <TaBRequestItem>
                    <img src={`${api.defaults.baseURL}/files/${purchase.image}`} alt="" />
                    <div>
                      <p>{purchase.request_amount}x {purchase.title} <small>{ConvertNumberStringForMoney(purchase.request_price)}</small></p>
                    </div>
                  </TaBRequestItem>
                </li>
              ))
            }
            <li>
              <span>Total:{ConvertNumberStringForMoney(purchases.totalPrice)}</span>
            </li>
          </ul>
        </Section >
        <Section title="status">
          <StatusContainer>
            <div>{
              purchases.status == 0 ? <span style={{ color: "#AB222E" }}>Pendente</span> :
                purchases.status == 1 ? <span style={{ color: "#FBA94C" }}>Preparando</span> :
                  <span style={{ color: "#04D361" }} >Entregue</span>
            }</div>
            <div>
              {purchases.status == 0 ?
                <div>
                  <BiTimeFive size={200} />
                  <span>Aguardando Pagamento!</span>
                </div> :
                purchases.status == 1 ?
                  <div>
                    <BiCheckCircle size={200} />
                    <span>Pagamento Aprovado, pedido a caminho!</span>
                  </div>
                  :
                  <div>
                    <GiKnifeFork size={200} />
                    <span>Pedido Entregue, bom apetite!</span>
                  </div>
              }
            </div>
          </StatusContainer>
        </Section>
      </main>

      <Footer />
    </Container>
  )
}