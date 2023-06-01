import styled from 'styled-components'

export const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  background-color: white;
`

type AuthButtonProps = {
  marginBottom?: string
}
export const AuthButton = styled.button<AuthButtonProps>`
  background-color: white;
  color: #991b1b;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  border: 1px solid #991b1b;
  &:hover {
    background-color: #991b1b;
    color: white;
  }
  margin-bottom: ${props => props.marginBottom ?? '0'};
`

export const LoginButton = styled.button`
  min-width: 50%;
  padding: 7px 20px;
  background-color: #991b1b;
  color: white;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  border: 1px solid #991b1b;
  transition: all 0.5s ease-in-out;
  &:hover {
    background: white;
    color: #991b1b;
  }
`

export const Label = styled.label`
  font-size: 1rem;
  font-weight: bold;
  color: #991b1b;
  margin-bottom: 0.5rem;
`

export const InputPhoneStepContainer = styled.div`
  width: 50%;
  margin: auto;
  background-color: white;
  padding: 1rem;
  border-radius: 10px;
`

export const InputPhoneStepTitle = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
  color: #991b1b;
  margin-bottom: 1rem;
`

export const InputPhoneStepInput = styled.input`
  padding: 0.5rem;
  border-radius: 5px;
  border: 1px solid #991b1b;
  margin-bottom: 1rem;
  font-size: 1rem;
  width: 100%;
`

export const ResendOtp = styled.div`
  font-size: 1rem;

  margin-bottom: 1rem;
  margin-top: 1rem;
  cursor: pointer;

  & > span.btn-action {
    font-weight: bold;
    color: #991b1b;
    margin-left: 0.5rem;
  }
`
