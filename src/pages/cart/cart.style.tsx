import styled from 'styled-components'
import { device } from '../../config/misc'

export const CartItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
  border: 1px solid #991b1b;
  transition: all 0.5s ease-out;
  margin-bottom: 5px;
  &:last-child {
    margin-bottom: 0;
  }
`

export const CartItemImage = styled.img`
  height: 100px;
  aspect-ratio: 3/2;
  object-fit: cover;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
`

export const ButtonRemove = styled.div`
  background-color: #fef2f2;
  height: 100px;
  border-top-right-radius: 9px;
  border-bottom-right-radius: 9px;
  cursor: pointer;
  width: auto;
  padding: 0 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease-in-out;
  &:hover {
    background-color: #991b1b;
    color: #fff;
  }
`

export const CartListContainer = styled.div`
  display: block;
  width: 95%;
  border-radius: 15px 10px;
  background-color: white;
  margin-left: auto;
  padding: 15px;
  text-align: center;
  margin: 0 auto;
  color: #991b1b;
  font-size: 1rem;
  font-weight: light;
  @media ${device.laptop} {
    width: 50%;
  }
  @media ${device.tablet} {
    width: 70%;
  }
`

export const CartEmpty = styled.div`
  display: block;
  width: 95%;
  height: 50%;
  border-radius: 10px;
  background-color: white;
  text-align: center;
  margin: 1rem auto;
  padding: 1rem;
  color: #991b1b;
  font-size: 2.5rem;
  font-weight: bold;
`

export const CartItemInfo = styled.div`
  display: block;
  width: 30%;
`

export const CartItemTitle = styled.div`
  font-weight: bold;
  font-size: 1.2rem;
  margin-bottom: 5px;
  text-align: left;
`

export const CartItemDescription = styled.div`
  font-size: 0.8rem;
  margin-bottom: 10px;
  text-align: left;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`

export const CartItemPrice = styled.div`
  font-weight: bold;
  font-size: 1.2rem;
`

export const CartTotalContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  border-top: 1px solid #991b1b;
  padding: 15px 25px;
`

export const CartTotalTitle = styled.div`
  font-size: 1.25rem;
  margin-right: 10px;
  font-weight: bold;
`

export const CartTotalPrice = styled.div`
  font-weight: bold;
  font-size: 1.2rem;

  & > span {
    font-size: 1.25rem;
    font-weight: light;
  }
`

export const CartQuantityContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  & > svg {
    cursor: pointer;
  }
`

export const CartQuantityValue = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  margin: 0 10px;
`

export const CartButtonCheckout = styled.button`
  display: block;
  width: 100%;
  background-color: #991b1b;
  border-radius: 5px;
  margin-top; 25px;
  padding: 5px 30px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  border: 1px solid #991b1b;
  color: white;
  transition: all 0.5s ease-in-out;
  &:hover {
    background-color: transparent;
    color: #991b1b;
  }
`
