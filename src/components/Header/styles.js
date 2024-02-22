import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items:  center;
    justify-content: center;
    background: ${({ theme }) => theme.COLORS.SECONDARY_BG};

  >header{
  display: flex;
  flex-direction: column;
  align-items:  center;
  padding: 0 2rem;
  gap: 1rem;
  width: 100%;
  max-width: 1220px;
  >.icon{
    color: ${({ theme }) => theme.COLORS.DARK_BLUE};
   fill: ${({ theme }) => theme.COLORS.DARK_BLUE};
   font-size: 5rem;
 
  
  }
  @media(min-width:768px) {
    flex-direction: row;
    justify-content:center;
   
  }



  }
 
  
`

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
 
  @media(min-width:768px) {
    justify-content: flex-end;
    gap: 3.2rem;

  }

 >a button{
    max-width: max-content;
    padding: 1rem;
    
   
    &.myRequestes{
    display: none;
      @media(min-width:900px) {
        display: flex;
      }
    }
    &.openButtonRequests{
      @media (min-width:900px)  {
        display: none;

      }
    }
  @media(min-width:768px) {
      position: initial;
      opacity: initial;
  }
  }

  a > img{
    width:3rem;
    height:3rem;
    background-color: pink;
    border-radius: 50%;
    
  }

`