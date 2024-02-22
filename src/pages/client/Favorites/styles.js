import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    min-height: 100vh;


`

export const Gallery =styled.div`
  max-width: 1000px;

  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(1,1fr);
  grid-template-rows: auto;
  @media (min-width:600px) {
    grid-template-columns: repeat(2,1fr);

  }

  @media (min-width:900px) {
    grid-template-columns: repeat(3,1fr);

  }
  @media (min-width:1200px) {
    grid-template-columns: repeat(4,1fr);

  }

`