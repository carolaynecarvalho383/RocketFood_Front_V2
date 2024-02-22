import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1.3rem;

  >img{
  width: 8rem;
  height: 8rem;
  }
  p{
    font-family: 'Poppins';
    font-weight: 500;
    font-size: 2rem;
    line-height: 2.2rem;
    color: ${({ theme})=> theme.COLORS.WHITE_300};
    
    >small{
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 1.2rem;
      line-height: 1.9rem;
      color: ${({theme})=> theme.COLORS.TEXT_SECONDARY_COLOR};
    }
  }

  button{
    color: ${({ theme }) => theme.COLORS.DARK_RED};
    background-color: transparent;
  }
`