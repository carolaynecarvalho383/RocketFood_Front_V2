import styled from "styled-components";

export const Container = styled.footer`
    width: 100%;
    background: ${({ theme }) => theme.COLORS.SECONDARY_BG};
    display: flex;
    align-items: center;
    justify-content: center;

  >footer{
  width: 100%;
  max-width: 1220px;
  height: 7.7rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4.2rem 0;
  >small{
    color: ${({ theme }) => theme.COLORS.WHITE};
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 0 1rem;

    >h4{
    font-family: 'Roboto';
    color: ${({ theme }) => theme.COLORS.TEXT_COLOR};
    display: flex;
    align-items: center;
    gap: 1.2rem;
    }
  }
  }
  
`