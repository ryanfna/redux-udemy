import { styled } from 'styled-components'
import Login from './Login'

const AuthContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`

const LeftBackground = styled.div`
  width: 50%;
  height: 100%;
  background-color: #991b1b;
`

const Auth = () => {
  return (
    <AuthContainer>
      <LeftBackground />
      <Login />
    </AuthContainer>
  )
}

export default Auth
