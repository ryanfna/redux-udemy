import { FoodDto } from '../types'

const FOODS: FoodDto[] = [
  {
    id: '1',
    name: 'Burger',
    description: 'Tasty',
    price: 10,
    image: 'https://cdn.auth0.com/blog/whatabyte/burger-sm.png',
    isAvailable: true
  },
  {
    id: '2',
    name: 'Pizza',
    description: 'Cheesy',
    price: 5,
    image: 'https://cdn.auth0.com/blog/whatabyte/pizza-sm.png',
    isAvailable: false
  },
  {
    id: '3',
    name: 'Tea',
    description: 'Informative',
    price: 3,
    image: 'https://cdn.auth0.com/blog/whatabyte/tea-sm.png',
    isAvailable: true
  },
  {
    id: '4',
    name: 'Coffee',
    description: 'Awesome',
    price: 6,
    image: 'https://cdn.auth0.com/blog/whatabyte/coffee-sm.png',
    isAvailable: true
  },
  {
    id: '5',
    name: 'Coffee',
    description: 'Awesome',
    price: 6,
    image: 'https://cdn.auth0.com/blog/whatabyte/coffee-sm.png',
    isAvailable: true
  },
  {
    id: '6',
    name: 'Pizza',
    description: 'Cheesy',
    price: 5,
    image: 'https://cdn.auth0.com/blog/whatabyte/pizza-sm.png',
    isAvailable: false
  },
  {
    id: '7',
    name: 'Tea',
    description: 'Informative',
    price: 3,
    image: 'https://cdn.auth0.com/blog/whatabyte/tea-sm.png',
    isAvailable: true
  }
]

export const getFoods = async (): Promise<FoodDto[]> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(FOODS)
    }, 1000)
  })
}

export const getFood = async (id: string): Promise<FoodDto> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(FOODS.find(food => food.id === id)!)
    }, 1000)
  })
}
