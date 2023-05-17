import { FC } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { addCard } from 'store/slices/cart.slice'
import { increment } from 'store/slices/counter.slice'
import styled from 'styled-components'
import { FoodDto } from 'types'

const FoodContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  border-radius: 5px;
  border: 1px solid #e0e0e0;
  &:hover {
    border: 1px solid #b91c1c;
  }
`
const FoodImage = styled.img`
  width: 100%;
  height: 100%;
  aspect-ratio: 3/2;
  object-fit: cover;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`

const FoodTitle = styled.div`
  font-size: 1.25rem;
  font-weight: bold;
`

const FoodDescription = styled.div`
  font-size: 0.8rem;
  margin-bottom: 5px;
`

const FoodPrice = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: #b91c1c;
  margin-left: auto;
  & > span {
    font-size: 1.5rem;
  }
`

const FooterFoodItem = styled.div`
  margin-top: 5px;
  padding: 5px 10px 10px 10px;
  display: flex;
  justify-content: space-between;
`

const FooterContentWrapper = styled.div`
  display: block;
`

const AddToCartButton = styled.button`
  background-color: #b91c1c;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  background-color: white;
  border: 1px solid #b91c1c;
  color: #b91c1c;
  transition: all 0.5s ease-in-out;
  &:hover {
    background-color: #b91c1c;
    color: white;
  }
`

const FoodItem: FC<FoodDto> = ({ id, name, description, price, image }) => {
  const dispatch = useDispatch()

  const handleAddToCart = (_evt: any) => {
    dispatch(increment())
    dispatch(addCard({ id, name, description, price, image }))
  }
  return (
    <FoodContainer>
      <Link to={`/food/${id}`}>
        <FoodImage src={image} />
      </Link>
      <FooterFoodItem>
        <FooterContentWrapper>
          <FoodTitle>{name}</FoodTitle>
          <FoodDescription>{description}</FoodDescription>
          <AddToCartButton onClick={handleAddToCart}>Add to cart</AddToCartButton>
        </FooterContentWrapper>
        <FoodPrice>
          {price}
          <span>$</span>
        </FoodPrice>
      </FooterFoodItem>
    </FoodContainer>
  )
}

export default FoodItem
