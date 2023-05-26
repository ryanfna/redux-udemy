import globalConfig from 'config/global.config'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logout } from 'store/slices/user.slice'
import styled from 'styled-components'
import { BrandIcon, ShoppingCart } from '..'

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
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
  margin: 15px;
`

const CartIcon = styled.div`
  position: fixed;
  z-index: 2;
  top: 50%;
  right: 0;
  padding: 15px;
  background-color: #b91c1c;
  color: white;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  border-bottom-left-radius: 10px;
  border-top-left-radius: 10px;
  margin-bottom: 10px;
  min-width: 50px;
  cursor: pointer;
  & > svg {
    margin-right: 5px;
  }
`

const CartLength = styled.div`
  font-size: 1rem;
  font-weight: bold;
  padding: 5px 15px;
  background-color: white;
  border-radius: 5px;
  color: #b91c1c;
  margin-top: 5px;
`

const InfoHeaderContainer = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  padding: 10px;
  color: black;
  font-weight: normal;
  font-size: 1rem;
`

const InfoContainer = styled.div`
  display: flex;
  align-items: center;
`

const LogoutButton = styled.button`
  color: #b91c1c;
  font-weight: bold;
  border: none;
  background-color: transparent;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`

const InfoPhoneNumber = styled.div`
  margin-left: 5px;
`

const Header = () => {
  const { cart, user } = useSelector((state: any) => state)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  return (
    <>
      <HeaderContainer>
        <Brand onClick={() => navigate('/')}>
          <BrandIcon width="2em" height="2em" />
          <BrandTitle>{globalConfig.title}</BrandTitle>
        </Brand>
        {user.phone ? (
          <InfoHeaderContainer>
            <InfoContainer>
              Halo <InfoPhoneNumber>{user.phone}</InfoPhoneNumber>,
              <LogoutButton onClick={() => dispatch(logout())}>Logout</LogoutButton>
            </InfoContainer>
          </InfoHeaderContainer>
        ) : (
          <LogoutButton onClick={() => navigate('/login')}>Login</LogoutButton>
        )}
      </HeaderContainer>
      {cart.length > 0 && (
        <CartIcon onClick={() => navigate('/cart')}>
          <ShoppingCart height={24} width={24} />
          <CartLength>{cart.length} items</CartLength>
        </CartIcon>
      )}
    </>
  )
}

export default Header
