import styled from "styled-components";

export const Container = styled.div`
  display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
   min-height: 100vh;

  >section{
    position: relative;

    a{
      position: absolute;
      left: 20%;
      top: 0;
    }
  }
`