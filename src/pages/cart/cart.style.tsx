import styled from 'styled-components'

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
  background-color: #b91c1c;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  border: 1px solid #b91c1c;
  &:hover {
    background-color: white;
    color: #b91c1c;
  }
`

export const CartListContainer = styled.div`
  display: block;
  width: 50%;
  margin-left: auto;
  padding: 15px;
  text-align: center;
  margin: 0 auto;
  font-style: italic;
  color: #b91c1c;
  font-size: 1rem;
  font-weight: light;
`
