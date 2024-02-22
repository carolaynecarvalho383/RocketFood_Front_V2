import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  min-height: 100vh;
  >section{
    background: ${({ theme }) => theme.COLORS.SECONDARY_BG};
    padding:  6.4rem 2rem;
    max-width: 48rem;
    height: 65rem;
    
  }
  @media (min-width:900px) {
    flex-direction: row;
    justify-content: space-around;    
    padding:5vw;
  }
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  align-items: center;
  margin-top: 3.2rem;
 
  >a{
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 1.4rem;
    line-height: 2.4rem;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }
`

