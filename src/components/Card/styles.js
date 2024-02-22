import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative;
  margin-top: 1rem;
  //width: 30rem;
  height: 56rem;
  padding: 4rem;
  background-color: rgba(0, 0, 0, 0.32);
  
  border: 1px solid rgba(0, 0, 0, 0.65);
  border-radius: 8px;
  >img{
    width: 100%;
    height: 22rem;

  }
  >strong{
  font-weight: 400;
  font-size: 3.2rem;
  line-height: 5.1rem;
  text-align: center;
  color: #82F3FF;
  }

  >svg,
  a:first-child {
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    cursor: pointer;
  }

`

export const Purchases = styled.div`
  display: flex;
  align-items: center;
  gap: 1.1rem;
  >svg{
      cursor: pointer;
  }
  >button{
      width: 9.2rem;
  }


`