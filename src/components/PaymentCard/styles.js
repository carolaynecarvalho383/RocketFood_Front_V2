import styled from "styled-components";

export const Container = styled.div`
  max-width: 50rem;
  min-width: 28rem;
  width: 100%;
   
  >div:nth-child(1) {
    display: flex;
    align-items: center;
    border-radius: 8px 8px 0px 0px;
    border: 1px solid ${({ theme }) => theme.COLORS.BORDES_COLOR};

    

    
    >button:nth-child(1){
      border-radius: 8px 0px 0px 0px;
    }
    >button:nth-child(2){
     border-radius: 0px 0px 8px 0px;
    }
  }
  
  >div:nth-child(2){
    padding:1rem ;
    border: 1px solid ${({ theme }) => theme.COLORS.BORDES_COLOR};
    min-height: 45rem;
    @media (min-width: 768px) {
      padding: 5rem 6rem 5rem;
    }
  }
`

export const ButtonPayment = styled.div`
    cursor: pointer;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 12px 14px;
    gap: 14px;
    color: white;
    background-color: ${({ theme, active }) => active ? theme.COLORS.BG_BUY: 'transparent'};
    border: 1px solid ${({ theme }) => theme.COLORS.BORDES_COLOR};
    width: 100%;

`