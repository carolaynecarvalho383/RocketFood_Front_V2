import { TextareaContainer, Container } from './styles'


export function Textarea({ name, value, ...rest }) {

  return (
    <Container>
      <label htmlFor={name}>{name}</label>
      <TextareaContainer {...rest} id={name} value={value} >
      </TextareaContainer>
    </Container>
  )

}