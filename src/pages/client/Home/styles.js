import styled from "styled-components";

export const Container = styled.div`
  display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    min-height: 100vh;
  >main{
    height: 40rem;
    width: 100%;
    max-width: 122rem;
    background: linear-gradient(180deg, #091E26 0%, #00131C 100%);
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    justify-content: space-between;
    
    @media (min-width: 768px) {
      flex-direction: row;
      height: 26rem;
    }
    >div img{
      max-width: 30rem;
      max-height: 30rem;
      justify-content: space-between;
    @media (min-width: 768px) {
      max-width: 40rem;
      max-height: 40rem;
    }
    @media (min-width:1000px) {
      max-width: 60rem;
      max-height: 60rem;
      position: absolute;
      bottom: 0;
      left: 0;
    }
    }
  }


`


export const Main = styled.main`
  padding: 1rem;
  text-align: center;
 @media (min-width: 768px) {
  margin-top: 13rem;
 }

`