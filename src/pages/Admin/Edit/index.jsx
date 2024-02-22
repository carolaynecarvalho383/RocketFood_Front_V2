import { useState, useEffect } from "react";
import { Button } from "../../../components/Button";
import { Footer } from "../../../components/Footer";
import { Header } from "../../../components/Header";
import { Input } from "../../../components/Input";
import { Section } from "../../../components/Section";
import { Textarea } from "../../../components/TextArea";
import { IngredientItem } from "../../../components/IngredientItem";
import { CardPreview } from "../../../components/CardPreview";

import { Container, ImageProduct, Form, ProductPreview, } from "./styles";

import { useNavigate, useParams } from 'react-router-dom';
import { api } from "../../../services/api";
import {ConvertNumberStringForMoney} from '../../../utils/ConvertNumberStringForMoney'
import {ConvertMoneyForNumberString} from '../../../utils/ConvertMoneyForNumberString' 

import { AiOutlineUpload, AiOutlineDelete } from "react-icons/ai";



export function Edit() {

  const [data, setData] = useState({})
  const [title, setTitle] = useState(data.title)
  const [price, setPrice] = useState(data.price)
  const [description, setDescription] = useState(data.description)

  const [inventory, setInventory] = useState('')
  const [category, setCategory] = useState('')

  const [imageFile, setImageFile] = useState(null)

  const [image, setImage] = useState(imageFile)

  const [newIngredient, setNewIngredient] = useState('')

console.log(imageFile);

  const navigate = useNavigate()

  const params = useParams()

  function handleChangeImage(event) {
    const file = event.target.files[0];
    setImageFile(file);

    const imagePreview = URL.createObjectURL(file)
    setImage(imagePreview);
  }
  async function handleAddUpdateProduct(event) {

    event.preventDefault()
    if (!title || !price || !inventory || !description || category === ""
    ) {
      return alert("Todos os Campos são obrigatórios ")
    }
    const fileUploadForm = new FormData();

    fileUploadForm.append("title", title);
    fileUploadForm.append("price", ConvertMoneyForNumberString(price));
    fileUploadForm.append("description", description);
    fileUploadForm.append("inventory", inventory);
    fileUploadForm.append("category", category);
    //fileUploadForm.append("image", image);
    

    try {
      
      api.put(`/products/${params.id}`, fileUploadForm);

      if (imageFile !== null) {
        const fileUploadForm = new FormData();
        fileUploadForm.append("image", imageFile);
        api.patch(`products/imageFile/${params.id}`,fileUploadForm);
      }


      alert("Produto adicionado com sucesso")
      //navigate("/");

    } catch (error) {
      alert("Não foi possível atualizar o produto, se o error persistir contate o administrator")
    }
  }

  async function handleDeleteProduct(id) {
    const isOk = confirm("Você realmente deseja deletar esse produto??");
    if (isOk) {
      try {
        await api.delete(`/products/${id}`);
        alert("Produto deletado com sucesso");
        navigate("/")
      } catch (error) {
        alert("Não foi possível efetuar essa ação!")
      }


    }

  }
  useEffect(() => {
    async function fetchProduct() {
      const response = await api.get(`/products/${params.id}`);

      setData(response.data);
      setTitle(response.data.title);
      setPrice(response.data.price);
      setDescription(response.data.description);
      setInventory(response.data.inventory);
      setCategory(response.data.category);

      const imageUrl = `${api.defaults.baseURL}/files/${response.data.image}`
      setImage(imageUrl)

    }
    fetchProduct()

  }, [])

  return (
    <Container>
      <Header />
      <Section>
        <Form >
          <ProductPreview>
            <AiOutlineDelete size={25}
              color={"red"}
              title="deletar item"
              onClick={() => handleDeleteProduct(data.id)} />
            <span>id:{data.id}</span>
            <img src={image} alt="product image" />
            <h3>{title}</h3>
            <p>{description}</p>
            <strong>{ConvertNumberStringForMoney(price)}</strong>
            <span>categoria : {category}</span>

            <span>estoque : {inventory}</span>

          </ProductPreview>
          <div>
            <ImageProduct>
              <span>Imagem do parto</span>
              <label htmlFor="addImg">
                <AiOutlineUpload size={25} />
                Selecione uma Imagem
                <input onChange={handleChangeImage}
                  type="file" id="addImg" className="sr-only" />
              </label>
            </ImageProduct>

            <Input onChange={e => setTitle(e.target.value)}
              name="Nome" placeholder=" Ex: Sorvete" value={title} />
          </div>


          <div>

            <Input onChange={e => setPrice(ConvertMoneyForNumberString(e.target.value))}
              name="Preço" type="number"
              placeholder="R$ 00,00"
               />

            <Input value={category} name="Category"
              placeholder="Selecione uam categoria" className="hide"
              outer={
                <select name="category" value ={data.category}
                 onChange={e => setCategory(e.target.value)}>
                  <option value="pratosPrincipais">Pratos Principais</option>
                  <option value="sobremesas">Sobremesas</option>
                  <option value="bebidas">Bebidas</option>
                  <option value="outros">Outros</option>
                </select>} />

            <Input onChange={e => setInventory(e.target.value)}
              name="Estoque" type="number"
              placeholder="quantia em estoque"
              value={inventory} />
          </div>
          <Textarea onChange={e => setDescription(e.target.value)}
            name="Descrição"
            placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
            value={description} />

          <Button
            title="Atualizar Produto" onClick={e => handleAddUpdateProduct(e)} />

        </Form>
      </Section>

      <Footer />
    </Container>
  )
}