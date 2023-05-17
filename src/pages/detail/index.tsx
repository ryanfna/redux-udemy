import { FoodDto } from '@/types'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { styled } from 'styled-components'
import { addCard } from '../../store/slices/cart.slice'
import { getFood } from '../../utils/faker'

const ButtonAddToCart = styled.button`
  background-color: #b91c1c;
  color: #fff;
  padding: 10px 15px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  font-size: 1rem;
`

const DetailFoodContainer = styled.div`
  display: flex;
  width: 95%;
  margin-left: auto;
  padding: 15px;
  margin: 0 auto;
`

const DetailFoodImage = styled.img`
  height: 30%;
  aspect-ratio: 3/2;
  object-fit: cover;
  border-radius: 10px;
`

const InfoFoodContainer = styled.div`
  display: block;
  width: 100%;
  margin: 0 auto;
  padding: 0 15px;
`

const TitleNameFood = styled.h1`
  font-weight: bold;
  margin: 0;
  color: #b91c1c;
  font-size: 2.5rem;
`

const DescriptionFood = styled.div`
  font-size: 1rem;
  margin-bottom: 25px;
`

const PriceFood = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: #b91c1c;
  margin-left: auto;
  & > span {
    font-size: 1.5rem;
  }
`

const DetailFood = () => {
  const { foodId } = useParams()
  const [food, setFood] = useState<FoodDto>()
  const dispatch = useDispatch()

  const addToCart = () => {
    if (!food) return
    dispatch(addCard(food))
  }

  useEffect(() => {
    if (!foodId) return
    getFood(foodId).then(res => setFood(res))
  }, [foodId])

  return (
    <DetailFoodContainer>
      <DetailFoodImage src={food?.image} alt={food?.name} />
      <InfoFoodContainer>
        <TitleNameFood>{food?.name}</TitleNameFood>
        <DescriptionFood>{food?.description}</DescriptionFood>
        <PriceFood>
          {food?.price}
          <span>$</span>
        </PriceFood>
        <ButtonAddToCart onClick={addToCart}>Add to cart</ButtonAddToCart>
      </InfoFoodContainer>
    </DetailFoodContainer>
  )
}

export default DetailFood
