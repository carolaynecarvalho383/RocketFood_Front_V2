import {Container} from './styles'
import {AiOutlineClose, AiOutlinePlus} from 'react-icons/ai'

export function IngredientItem ({isNew = false ,value, onClick, ...rest}) {

return (
  <Container isNew= {isNew}>
    <input 
    type="text"
    value = {value} 
    readOnly = {!isNew}
    {...rest}/>

    <button 
    type='button'
    onClick={onClick}
    className= { isNew?"button-add":"button-delete"}
    >

    {isNew ? <AiOutlinePlus size={20} />:<AiOutlineClose size={20} />}

    </button>
  </Container>
)
}