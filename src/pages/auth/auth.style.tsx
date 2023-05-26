import styled from 'styled-components'

export const AuthContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`

type AuthButtonProps = {
  marginBottom?: string
}
export const AuthButton = styled.button<AuthButtonProps>`
  background-color: white;
  color: #b91c1c;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  border: 1px solid #b91c1c;
  &:hover {
    background-color: #b91c1c;
    color: white;
  }
  margin-bottom: ${props => props.marginBottom || '0'};
`

export const InputPhoneStepContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  margin: auto;
  background-color: white;
  padding: 1rem;
  border-radius: 10px;
`

export const InputPhoneStepTitle = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #b91c1c;
  margin-bottom: 1rem;
`

export const InputPhoneStepInput = styled.input`
  padding: 0.5rem;
  border-radius: 5px;
  border: 1px solid #b91c1c;
  margin-bottom: 1rem;
  font-size: 1rem;
`
