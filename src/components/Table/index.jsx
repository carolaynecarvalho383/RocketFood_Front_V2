import { useAuth } from "../../hooks/auth"
import { useState } from "react";


import { api } from "../../services/api";
import {ConvertNumberStringForMoney} from '../../utils/ConvertNumberStringForMoney' 

import { BsFillHexagonFill, BsTruckFlatbed } from "react-icons/bs"
import { Container, TableContainer } from "./styles";
import { Link, useNavigate } from "react-router-dom";

export function Table({ data }) {
  const { admin } = useAuth()
  const [status, setStatus] = useState('')

  const navigate = useNavigate()


  async function handlePatchStatus(id, value) {
    const isOK = window.confirm("Deseja alterar o status de comprar?")
    if (isOK) {
      await api.patch(`/requests/${id}`, { status: value })
    }
  }

  function handleRequestDetails(id){
    navigate(`/requestDetails/${id}`)
  }


  return (
    <Container>
      <TableContainer>
        <thead>
          <tr>
            <th>Status</th>
            <th>Código</th>
            <th>Detalhamentos</th>
            <th>Total</th>
            <th>Data e Hora</th>
          </tr>
        </thead>

        <tbody>
          {data &&
            data.map(request => (
              <tr>
                {!admin ?
                  <td>{request.status == 0 ?
                    <span><BsFillHexagonFill color="#AB222E" /> Pendente </span>
                    : request.status == 1 ? <span><BsFillHexagonFill color="#FBA94C" /> Preparando </span>
                      : <span><BsFillHexagonFill color="#04D361" /> Entregue </span>}
                  </td>
                  :
                  <td>
                    <label htmlFor="">
                      {
                        request.status == 0 ? <BsFillHexagonFill color="#AB222E" /> :
                          request.status == 1 ? <BsFillHexagonFill color="#FBA94C" /> :
                            <BsFillHexagonFill color="#04D361" />
                      }
                      <select value={Number(request.status)}
                        onChange={e => handlePatchStatus(request.id, e.target.value)}>
                        <option value={0}> Pendente</option>
                        <option value={1}>Preparando</option>
                        <option value={2} selected>Entregue</option>
                      </select>
                    </label>

                  </td>

                }
                
                <td onClick = {()=> handleRequestDetails(request.id)}>0000{request.id}</td>

                <td>
                  {
                    request.requestsItem.map(item => (
                      <span>{item.request_amount}X {item.title}    </span>
                    )

                    )
                  }
                </td>

                <td>{ConvertNumberStringForMoney(request.totalPrice)}</td>
                <td>{request.created_at}</td>
              </tr>
            ))
          }


        </tbody>
      </TableContainer>
    </Container>
  )
}