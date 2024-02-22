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
export const ProductPreview = styled.div`
   display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin-top: 1rem;
  width: 28rem;
  height: max-content;
  padding: 4rem;
  background-color: rgba(0, 0, 0, 0.32);
  
  border: 1px solid rgba(0, 0, 0, 0.65);
  border-radius: 8px;
  margin: 0 auto;
  >svg{
    position: absolute;
    top: 1rem;
    right: 1rem;
    cursor: pointer;
  }
  >img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  >strong{
  font-weight: 400;
  font-size: 3.2rem;
  line-height: 5.1rem;
  text-align: center;
  color: #82F3FF;
  }

  >.favorite{
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    cursor: pointer;
  }

  >.ingredient-container{
    display: flex;
    align-items: center;
    gap: 1.6rem;
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

