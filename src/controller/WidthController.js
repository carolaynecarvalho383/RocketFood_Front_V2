

export function WidthController(){
  let width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

  window.onresize = () => {
    width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    
    console.log(width);
  }
  console.log(width);

  return{
    width
  }
};