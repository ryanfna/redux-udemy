import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, AppState } from 'store'
import { fetchFoods, selectAllFoods } from 'store/slices/food.slice'
import { FoodDto } from 'types'
import FoodItem from './FoodItem'
import { FeedsContainer, GridContainer, TitleFeed } from './feeds.style'

const Feeds = () => {
  const foods = useSelector(selectAllFoods)
  const status = useSelector((state: AppState) => state.foods.status)
  const dispatch = useDispatch<AppDispatch>()

  console.log('foods', foods)

  React.useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchFoods())
    }
  }, [dispatch])

  return (
    <FeedsContainer>
      <TitleFeed>Explore our collections</TitleFeed>
      <GridContainer>
        {foods.map((food: FoodDto) => {
          return <FoodItem key={food.id} {...food} />
        })}
      </GridContainer>
    </FeedsContainer>
  )
}

export default Feeds
