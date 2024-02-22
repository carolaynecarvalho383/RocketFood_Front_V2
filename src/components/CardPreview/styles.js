import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
  gap: 2rem;
  margin-top: 1rem;
  width: 30rem;
  padding: 4rem;
  background-color: rgba(0, 0, 0, 0.32);
  border: 1px solid rgba(0, 0, 0, 0.65);
  border-radius: 8px;
  margin: 0 auto;
  >img{
    width: 100%;
    max-width: 39rem;
  }
  >.favorite{
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    cursor: pointer;
  }

  >.ingredient-container{
    display: flex;
    align-items: center;
    gap: 1.6rem;
  }
  @media (min-width:768px) {
    flex-direction: row;
    width: 100rem;
  }
`
export const Purchases = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1.1rem;

  @media (min-width:768px) {
    flex-direction:row;
  }
  >div:first-child{
    display: flex;
    align-items: center;
    gap: 1.1rem;
  cursor: pointer;
  }
  >svg{
      cursor: pointer;
  }
  >button{
      width: 9.2rem;
  }


`
export const DetailsContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 80%;
  gap: 1.6rem;
    @media (min-width: 768px) {
      >div h3{
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 500;
        font-size: 40px;
        line-height: 140%;
      }
    }
  >div:nth-child(3){
    display: flex;
    align-items: center;
    flex-direction: column;
    gap:1.6rem;
    @media (min-width:768px) {
      flex-direction: row;
      gap:5rem;
     
    }
    >strong{
    font-weight: 400;
    font-size: 3.2rem;
    line-height: 5.1rem;
    text-align: center;
    color: #82F3FF;
  }
  }
  
`