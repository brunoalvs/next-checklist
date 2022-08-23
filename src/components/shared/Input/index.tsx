import { Container } from './styles'
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> { }

export const Input = ({ children, ...props }: InputProps) => {
  return (
    <Container {...props} />
  )
}