import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { BrandIcon } from '..'
import globalConfig from '../../config/GlobalConfig'

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  background-color: white;
  color: #b91c1c;
  font-weight: bold;
  border-bottom: 1px solid #b91c1c;
  position: relative;
  z-index: 1;
  a {
    text-decoration: none;
    color: #b91c1c;
  }
`

const BrandTitle = styled.div`
  margin-left: 10px;
  font-size: 1.25rem;
`

const Brand = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`

const CartIcon = styled.div`
  padding: 10px;
  background-color: #b91c1c;
  color: white;
  border-radius: 50%;
  aspect-ratio: 1;
`

const Header = () => {
  const counter = useSelector((state: any) => state.counter)
  const navigate = useNavigate()
  return (
    <HeaderContainer>
      <Brand onClick={() => navigate('/')}>
        <BrandIcon />
        <BrandTitle>{globalConfig.title}</BrandTitle>
      </Brand>
      <CartIcon>
        <div>{counter}</div>
      </CartIcon>
    </HeaderContainer>
  )
}

export default Header
