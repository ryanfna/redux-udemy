import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { BrandIcon } from '..'
import globalConfig from '../../config/GlobalConfig'

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 15px;
  background-color: white;
  color: #b91c1c;
  font-size: 24px;
  font-weight: bold;
  border-bottom: 1px solid #b91c1c;
  position: relative;
  width: 100%;
  z-index: 1;
  & > div {
    display: flex;
    align-items: center;
  }
  a {
    text-decoration: none;
    color: #b91c1c;
  }
`

const BrandTitle = styled.div`
  margin-left: 10px;
`

const Brand = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`

const Header = () => {
  return (
    <HeaderContainer>
      <Link to="/">
        <Brand>
          <BrandIcon />
          <BrandTitle>{globalConfig.title}</BrandTitle>
        </Brand>
      </Link>
    </HeaderContainer>
  )
}

export default Header
