import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { AppState } from 'store'
import { addCard } from 'store/slices/cart.slice'
import { selectFoodById } from 'store/slices/food.slice'
import { styled } from 'styled-components'

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

const FoodNotFound = styled.div`
  display: block;
  width: 95%;
  text-align: center;
  margin: 0 auto;
  color: #b91c1c;
  font-size: 2rem;
  font-weight: light;
`

const DetailFood = () => {
  const { foodId } = useParams()
  const dispatch = useDispatch()
  const food = useSelector((state: AppState) => selectFoodById(state, foodId!))
  const status = useSelector((state: AppState) => state.foods.status)

  console.log(status)

  const addToCart = () => {
    if (!food) return
    dispatch(addCard(food))
  }

  if (status === 'loading') return <FoodNotFound>Loading...</FoodNotFound>
  if (!food) return <FoodNotFound>Food Not Found</FoodNotFound>
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
