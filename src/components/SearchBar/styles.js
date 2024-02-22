import styled from "styled-components";

export const Container = styled.div`

  width: 100%;
  height: 5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  background: ${({ theme }) => theme.COLORS.TERNARY_BG};
  padding: 0 1.4rem;
  border-radius: 5px;


  >input{
    background: transparent;
    border: none;
    width: 100%;
    border-radius: 5px;
    padding: 12px 14px;
    color:${({ theme }) => theme.COLORS.WHITE};
    outline: 0;
    ::placeholder{
      color:${({ theme }) => theme.COLORS.TEXT_COLOR};
    }

  }


`