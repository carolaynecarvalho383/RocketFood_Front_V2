import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;

  >label{
    font-family: 'Roboto' ,sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 1.6rem;
    color:${({ theme})=> theme.COLORS.TEXT_COLOR};

  }

`


export const TextareaContainer = styled.textarea`
width: 100%;
height: 15rem;
background-color: transparent;
color: ${({theme}) => theme.COLORS.WHITE};
border: 1px solid ${({theme}) => theme.COLORS.WHITE};
resize: none;
margin-bottom: .8rem;
border-radius: 1rem;
padding:1.6rem;
&::placeholder{
  color: ${({theme}) => theme.COLORS.BACKGROUND_300};
}
`