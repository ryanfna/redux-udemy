import { FoodDto } from '@/types'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getFood } from '../../utils/faker'

const DetailFood = () => {
  const { foodId } = useParams()
  const [food, setFood] = useState<FoodDto>()

  useEffect(() => {
    if (!foodId) return
    getFood(foodId).then(res => setFood(res))
  }, [foodId])

  return (
    <div>
      <h1>Detail Food</h1>
      <p>Food ID: {foodId}</p>
      <p>Food Name: {food?.name}</p>
      <img src={food?.image} alt={food?.name} />
    </div>
  )
}

export default DetailFood
