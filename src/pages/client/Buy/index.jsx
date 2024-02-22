import { useState, useEffect } from "react";
import { api } from "../../../services/api";
import { Footer } from "../../../components/Footer";
import { Header } from "../../../components/Header";
import { Section } from "../../../components/Section";
import { TabCard } from "../../../components/TabCard";
import { Container } from "./styles";
import { PaymentCard } from "../../../components/PaymentCard";

import {ConvertNumberStringForMoney} from "../../../utils/ConvertNumberStringForMoney"

export function Buy() {
  const [purchases, setPurchases] = useState([])
  const sumAll = purchases.map(item => Number(item.totalPrice)).reduce((prev, curr) => prev + curr, 0);
  const [render, setRender] = useState(1)
  
  async function handleDeletePurchase(id) {
    await api.delete(`/purchases/${id}`)
    setRender(prevState => (prevState * 2))
    return
  }

  useEffect(() => {
    async function fetchPurchases() {
      const response = await api.get('/purchases');
      setPurchases(response.data)
    }
    fetchPurchases()

  }, [render])

  return (
    <Container>
      <Header addCart={sumAll} />
      <main>
        <Section title={purchases.length > 1 ? "Meus pedidos" : "Meu pedido"}>
          <ul>
            {purchases &&
              purchases.map(purchase => (
                <li key={String(purchase.id)}>
                  <TabCard data={purchase}
                    onClick={() => handleDeletePurchase(purchase.id)}
                  />
                </li>
              ))
            }
            <li>
              <span>Total:{ConvertNumberStringForMoney(sumAll)}</span>
            </li>
          </ul>
        </Section >
        <Section title="Pagamento">
          <PaymentCard
            allProducts={purchases}
            requestPrice={sumAll} />

        </Section>
      </main>

      <Footer />
    </Container>
  )
}