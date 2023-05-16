import React from 'react'
import { FoodDto } from '../../types'
import { getFoods } from '../../utils/faker'
import FoodItem from './FoodItem'
import { FeedsContainer, GridContainer } from './feeds.style'

const Feeds = () => {
  const [feeds, setFeeds] = React.useState<FoodDto[]>([])

  React.useEffect(() => {
    getFoods().then((res: FoodDto[]) => {
      setFeeds(res)
    })
  }, [])

  return (
    <FeedsContainer>
      <GridContainer>
        {feeds.map((feed: FoodDto) => {
          return <FoodItem key={feed.id} {...feed} />
        })}
      </GridContainer>
    </FeedsContainer>
  )
}

export default Feeds
