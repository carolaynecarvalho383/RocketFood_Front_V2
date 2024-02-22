import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 3rem;
  gap: 3rem;
  >h2{
    color: ${({ theme})=> theme.COLORS.WHITE};
    margin: 0 auto;
    font-style: normal;
    font-weight: 500;
    font-size: 3.2rem;
    line-height: 2.4rem;
  }


`