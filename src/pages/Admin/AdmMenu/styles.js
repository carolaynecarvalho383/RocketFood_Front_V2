import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    min-height: 100vh;
  >section{

    @media (min-width:850px) {
      padding: 4rem 12.4rem;
    }
  }
`
export const ImageProduct = styled.label`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1rem;
  min-width:fit-content;

 >label{
  display: flex;
  align-items: center;
  gap: 1rem;
  border: 1px solid ${({ theme }) => theme.COLORS.WHITE};
  border-radius: 5px;
  padding: .7rem;
  height: 4.8rem;

  font-size: 1.4rem;

  cursor: pointer;
 }
 >span{
  font-style: normal;
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 1.6rem;  color:${({ theme }) => theme.COLORS.TEXT_COLOR};

 }


`
export const ImageFile = styled.div`
  min-height: 20rem;
  border-radius: 5px;

  width: fit-content;
  height: 100%;

  max-width: 40rem;
  max-height: 30rem;
  border: 1px solid ${({ theme }) => theme.COLORS.WHITE_300};
  >label img{
    width: 100%;
    max-height: 30rem;
    object-fit: fill;
    border-radius: 5px;
  }


`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-content: center;
  max-width: 1120px;
  width: 100%;

  
  @media (min-width:768px) {

    gap: 3.2rem;

  }
>div{

  @media (min-width:768px) {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 1rem;

  }
}
.ingredientContainer{
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  >span{
    color:${({ theme }) => theme.COLORS.TEXT_COLOR};
    font-style: normal;
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 1.6rem;
  }
> .ingredients{
  width: 100%;
  border: 1px solid ${({ theme }) => theme.COLORS.WHITE};
  border-radius: 5px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  padding: 8px;
  min-height: 4.8rem;

  @media (min-width:768px) {
    flex-direction: row;
    height: 4.8rem;

  }
}
}


`
export const Select = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  >div{
    width: 100%;
   border: 1px solid ${({ theme }) => theme.COLORS.WHITE};
    border-radius: 5px;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  >select{
    background-color: transparent ;
    border: 1px solid ${({ theme }) => theme.COLORS.WHITE};
    border-radius: 5px;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

`