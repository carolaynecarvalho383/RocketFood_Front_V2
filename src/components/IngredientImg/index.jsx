

import arugula from "../../assets/ingredients/arugula.svg";
import bread_nan from "../../assets/ingredients/bread_nan.svg";
import bread from "../../assets/ingredients/bread.svg";
import cucumber from "../../assets/ingredients/cucumber.svg";
import ham from "../../assets/ingredients/ham.svg";
import lettuce from "../../assets/ingredients/lettuce.svg";
import pasta from "../../assets/ingredients/pasta.svg";
import radish from "../../assets/ingredients/radish.svg";
import shrimp from "../../assets/ingredients/shrimp.svg";
import tomato from "../../assets/ingredients/tomato.svg";
import plum from "../../assets/ingredients/plum.svg";
import flour from "../../assets/ingredients/flour.svg";
import peach from "../../assets/ingredients/peach.svg";
import almonds from "../../assets/ingredients/almonds.svg";
import eggWhite from "../../assets/ingredients/eggWhite.svg";
import apricot from "../../assets/ingredients/apricot.svg";
import coffee from "../../assets/ingredients/coffee.svg";
import passionFruit from "../../assets/ingredients/passionFruit.svg";
import cinnamon from "../../assets/ingredients/cinnamon.svg";
import anise from "../../assets/ingredients/anise.svg";
import lemon from "../../assets/ingredients/lemon.svg";
import apple from "../../assets/ingredients/apple.svg";
import whiskey from "../../assets/ingredients/whiskey.svg";

import { AccentRemover } from "../../utils/AccentRemover";

import { Container } from "./styles";

export function IngredientImg({ ingredientName }) {
  console.log(ingredientName);
  return (
    <Container>
      {AccentRemover(ingredientName) === 'arugula' ? <span><img src={arugula} alt={`imagem de ${ingredientName}`} /><span>{ingredientName}</span></span> : ''}
      {AccentRemover(ingredientName) === 'paonaan' ? <span><img src={bread_nan} alt={`imagem de ${ingredientName}`} /><span>{ingredientName}</span></span> : ''}
      {AccentRemover(ingredientName) === 'pao' ? <span><img src={bread} alt={`imagem de ${ingredientName}`} /><span>{ingredientName}</span></span> : ''}
      {AccentRemover(ingredientName) === 'pepino' ? <span><img src={cucumber} alt={`imagem de ${ingredientName}`} /><span>{ingredientName}</span></span> : ''}
      {AccentRemover(ingredientName) === 'presunto' ? <span><img src={ham} alt={`imagem de ${ingredientName}`} /><span>{ingredientName}</span></span> : ''}
      {AccentRemover(ingredientName) === 'alface' ? <span><img src={lettuce} alt={`imagem de ${ingredientName}`} /><span>{ingredientName}</span></span> : ''}
      {AccentRemover(ingredientName) === 'massa' ? <span><img src={pasta} alt={`imagem de ${ingredientName}`} /><span>{ingredientName}</span></span> : ''}
      {AccentRemover(ingredientName) === 'rabanete' ? <span><img src={radish} alt={`imagem de ${ingredientName}`} /><span>{ingredientName}</span></span> : ''}
      {AccentRemover(ingredientName) === 'camarao' ? <span><img src={shrimp} alt={`imagem de ${ingredientName}`} /><span>{ingredientName}</span></span> : ''}
      {AccentRemover(ingredientName) === 'tomate' ? <span><img src={tomato} alt={`imagem de ${ingredientName}`} /><span>{ingredientName}</span></span> : ''}
      {AccentRemover(ingredientName) === 'ameixa' ? <span><img src={plum} alt={`imagem de ${ingredientName}`} /><span>{ingredientName}</span></span> : ''}
      {AccentRemover(ingredientName) === 'farinha' ? <span><img src={flour} alt={`imagem de ${ingredientName}`} /><span>{ingredientName}</span></span> : ''}
      {AccentRemover(ingredientName) === 'pessego' ? <span><img src={peach} alt={`imagem de ${ingredientName}`} /><span>{ingredientName}</span></span> : ''}
      {AccentRemover(ingredientName) === 'amendoas' ? <span><img src={almonds} alt={`imagem de ${ingredientName}`} /><span>{ingredientName}</span></span> : ''}
      {AccentRemover(ingredientName) === 'claras' ? <span><img src={eggWhite} alt={`imagem de ${ingredientName}`} /><span>{ingredientName}</span></span> : ''}
      {AccentRemover(ingredientName) === 'damasco' ? <span><img src={apricot} alt={`imagem de ${ingredientName}`} /><span>{ingredientName}</span></span> : ''}
      {AccentRemover(ingredientName) === 'cafe' ? <span><img src={coffee} alt={`imagem de ${ingredientName}`} /><span>{ingredientName}</span></span> : ''}
      {AccentRemover(ingredientName) === 'maracuja' ? <span><img src={passionFruit} alt={`imagem de ${ingredientName}`} /><span>{ingredientName}</span></span> : ''}
      {AccentRemover(ingredientName) === 'canela' ? <span><img src={cinnamon} alt={`imagem de ${ingredientName}`} /><span>{ingredientName}</span></span> : ''}
      {AccentRemover(ingredientName) === 'aniz' ? <span><img src={anise} alt={`imagem de ${ingredientName}`} /><span>{ingredientName}</span></span> : ''}
      {AccentRemover(ingredientName) === 'limao' ? <span><img src={lemon} alt={`imagem de ${ingredientName}`} /><span>{ingredientName}</span></span> : ''}
      {AccentRemover(ingredientName) === 'maça' ? <span><img src={apple} alt={`imagem de ${ingredientName}`} /><span>{ingredientName}</span></span> : ''}
      {AccentRemover(ingredientName) === 'whisky' ? <span><img src={whiskey} alt={`imagem de ${ingredientName}`} /><span>{ingredientName}</span></span> : ''}
    </Container>
  )
}