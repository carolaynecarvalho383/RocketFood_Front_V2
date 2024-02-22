import styled from 'styled-components'

export const Container = styled.div`
  display: flex; 
  align-items:center;
  background-color: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.GRAY_700};
  color: ${({ theme }) => theme.COLORS.TEXT_COLOR};
  border : ${({ theme, isNew }) => isNew ? `1px dashed ${theme.COLORS.TEXT_COLOR}` : "none"};
  border-radius:1rem;
  min-width: fit-content;
  height:3.2rem;
  padding: 1rem 1.6rem;
  >label{
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  
    >img{
      width: 100%;
      height: 100%;


    }
    >span{
      display: flex;
     align-items: center;
      justify-content: center;
    
      padding: 0 .5rem;
      gap: .5rem;

     border: 1px dashed ${({ theme }) => theme.COLORS.TEXT_COLOR};

    }
  }
  
  > button{
    border: none;
    background: none;
  }
  > input{
    
    width: 100%;
    color: ${({ theme }) => theme.COLORS.WHITE};
    background-color:transparent;
    border: none;
    &::placeholder{
      color: ${({ theme }) => theme.COLORS.TEXT_COLOR};
    }
  }
  .button-delete{
    color: ${({ theme }) => theme.COLORS.DARK_RED};
  }
  .button-add{
   color: ${({ theme }) => theme.COLORS.TEXT_COLOR};

  }
`