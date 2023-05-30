import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { AppState } from 'store'
import { addCard } from 'store/slices/cart.slice'
import { selectFoodById } from 'store/slices/food.slice'
import { styled } from 'styled-components'

const ButtonAddToCart = styled.button`
  background-color: #991b1b;
  border-radius: 5px;
  color: white;
  font-size: 1rem;
  font-weight: bold;
  padding: 15px 30px;
  cursor: pointer;
  border: 1px solid #991b1b;
  transition: all 0.5s ease-in-out;
  &:focus {
    outline: none;
  }
  &:hover {
    background-color: white;
    color: #991b1b;
  }
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

const TitleNameFood = styled.h2`
  font-weight: bold;
  margin: 0;
  font-size: 2rem;
`

const DescriptionFood = styled.div`
  font-size: 1rem;
  margin-bottom: 25px;
`

const PriceFood = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: #991b1b;
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
  color: #991b1b;
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
        <PriceFood>
          {food?.price}
          <span>$</span>
        </PriceFood>
        <DescriptionFood>{food?.description}</DescriptionFood>
        <ButtonAddToCart onClick={addToCart}>Add to cart</ButtonAddToCart>
      </InfoFoodContainer>
    </DetailFoodContainer>
  )
}

export default DetailFood
