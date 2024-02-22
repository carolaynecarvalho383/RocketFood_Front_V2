import styled from "styled-components";

export const Container = styled.div`
  display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    min-height: 100vh;
  >section{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    padding-top: 10rem;
    >  nav ul{
      display: flex;
      align-items: center;
      flex-direction: row;
      gap: 1rem;
      
    }
    
  }
`
export const Form = styled.div`
  max-width: 35rem;
  display: flex;
  align-items: center;
  flex-direction: column;
`



export const Avatar = styled.div`
  margin-top: -10rem;
  width: 18.6rem;
  height: 18.6rem;
  margin-bottom: 6rem;
  position: relative;
  >img{
  width: 18.6rem;
  height: 18.6rem;
  border-radius: 50%;
  object-fit: cover;
  
  }
  >label{
    width:4.8rem;
    height:4.8rem;
    background-color:${({ theme }) => theme.COLORS.ORANGE};
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    position: absolute;
    right: 0rem;
    bottom: .5rem;
    cursor: pointer;
    >input{
      display: none;
    }
    >svg{
      font-size: 2.4rem;
      color:${({ theme }) => theme.COLORS.BACKGROUND_800};
    }
  }
`