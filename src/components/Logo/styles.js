import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  margin: 1rem 0  0;
  
 >.icon{
   animation: rotateAnimation 1500ms linear infinite;
   color: ${({ theme }) => theme.COLORS.DARK_BLUE};
   fill: ${({ theme }) => theme.COLORS.DARK_BLUE};
   font-size: 5rem;
   @media(min-width:900px) {
    font-size: 20rem;
    //animation: initial;
    + a h1{
      @media(min-width:900px) {
    font-size: 6rem;
    text-align: center;
    }
    }
  }
 }

 >.icon2{
   //animation: rotateAnimation 1500ms linear infinite;
   color: ${({ theme }) => theme.COLORS.DARK_BLUE};
   fill: ${({ theme }) => theme.COLORS.DARK_BLUE};
   font-size: 3rem;

   @media(min-width:768px) {
      + a h1{
        text-align: center;
      }
    }
   
  }
  >a h1{
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 2.2rem;
    line-height: 5rem;
  }

  
  @media(min-width:768px) {
      flex-direction: row;
      display: flex;
      align-items: center;
      width: 70%;}

`