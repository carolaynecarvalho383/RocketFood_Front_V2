import { useState } from "react";
import { useEffect } from "react";
import { createContext, useContext } from "react";
import { api } from "../services/api";

export const ProductContext = createContext([])


function ProductProvider({ children }) {

  const [products, setProducts] = useState([])
  const [dessert, setDessert] = useState([])
  const [main, setMain] = useState([])
  const [drink, setDrink] = useState([])
  const [other, setOther] = useState([])




  async function loadProducts() {
    try {
      const response = await api.get("/loadProduct");
      const { allProducts } = response.data
      setProducts(allProducts)




    } catch (error) {
      console.log(error);
    }
  }
  async function loadDessertsCategory() {
    const response = await api.get(`/loadProduct/category?category=Sobremesas`)
    const { allProducts } = response.data
    setDessert(allProducts)
  }

  async function loadMainCategory() {
    const response = await api.get(`/loadProduct/category?category=pratosPrincipais`)
    const { allProducts } = response.data
    setMain(allProducts)
  }
  async function loadDrinksCategory() {
    const response = await api.get(`/loadProduct/category?category=bebidas`)
    const { allProducts } = response.data
    setDrink(allProducts)
  }
  async function loadOutersCategory() {
    const response = await api.get(`/loadProduct/category?category=outros`)
    const { allProducts } = response.data
    setOther(allProducts)
  }



  useEffect(() => {

  }, [])

  return (
    <ProductContext.Provider value={
      {
        loadProducts,
        loadDessertsCategory,
        loadMainCategory,
        loadDrinksCategory,
        loadOutersCategory,
        products: products,
        desserts: dessert,
        mains: main,
        drinks: drink,
        others: other
      }}>

      {children}
    </ProductContext.Provider>
  )
}

function useProduct() {
  const context = useContext(ProductContext)

  return context
}

export {
  ProductProvider,
  useProduct,

}