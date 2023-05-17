import styled from 'styled-components'
import { device } from '../../config/misc'

export const CartItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  border-radius: 10px;
  border: 1px solid #b91c1c;
  margin-bottom: 5px;
  &:last-child {
    margin-bottom: 0;
  }
`

export const CartItemImage = styled.img`
  height: 100px;
  aspect-ratio: 3/2;
  margin: -15px 15px -15px -15px;
  object-fit: cover;
  border-radius: 10px;
`

export const ButtonRemove = styled.button`
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
`

export const CartListContainer = styled.div`
  display: block;
  width: 95%;
  margin-left: auto;
  padding: 15px;
  text-align: center;
  margin: 0 auto;
  color: #b91c1c;
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
  text-align: center;
  margin: 2rem auto;
  color: #b91c1c;
  font-size: 2.5rem;
  font-weight: bold;
`

export const CartInfo = styled.div`
  display: block;
  width: 30%;
`

export const CartTitleItem = styled.div`
  font-weight: bold;
  font-size: 1.2rem;
  margin-bottom: 10px;
  text-align: left;
`

export const CartDescriptionItem = styled.div`
  font-size: 0.8rem;
  margin-bottom: 10px;
  text-align: left;
`

export const CartPriceItem = styled.div`
  font-weight: bold;
  font-size: 1.2rem;
`

export const CartTotalContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid #b91c1c;
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

export const CartButtonCheckout = styled.button`
  display: block;
  width: 100%;
  background-color: #b91c1c;
  border-radius: 5px;
  margin-top; 25px;
  padding: 5px 30px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  border: 1px solid #b91c1c;
  color: white;
  &:hover {
    background-color: transparent;
    color: #b91c1c;
  }
`
