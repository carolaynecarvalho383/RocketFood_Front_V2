
import { Container } from "./styles";
import { useEffect } from "react";
import { api } from "../../services/api";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { IngredientImg } from "../IngredientImg";

export function IngredientsContainer() {
  const [data, setData] = useState([])
  const params = useParams()
 
  useEffect(() => {
    async function fetchIngredients() {
      const response = await api.get(`/ingredients/${params.id}/`)
      setData(response.data)
    } fetchIngredients()
  }, [])
  return (
    <Container>
      {data &&
        data.map(ingredient => (
          /*  <div>
              <img src={ingredients.filter(name => {
                const image = name.toLowerCase().indexOf(`/src/assets/ingredients/${ingredient.ingredientName}.svg`) !== -1
                return image
              })} alt={`imagem de ${ingredient.ingredientName}`} />
              <span>{ingredient.ingredientName}</span>
            </div>*/
          <IngredientImg ingredientName={ingredient.ingredientName} />
        ))}
    </Container>
  )



}