import { FoodDto } from '@types'
import { FC } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { addCard } from 'store/slices/cart.slice'
import { increment } from 'store/slices/counter.slice'
import {
  AddToCartButton,
  FoodContainer,
  FoodDescription,
  FoodImage,
  FoodPrice,
  FoodTitle,
  FooterContentWrapper,
  FooterFoodItem
} from './food-item.style'

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
