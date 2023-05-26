export type FoodDto = {
  id: string
  name: string
  description: string
  price: number
  image: string
  isAvailable: boolean
}

export type UserDto = {
  id: string
  phone: string
}

export type CartDto = Partial<FoodDto> & {
  quantity: number
}

export type CartsDto = {
  id: string
  userId: string
  foodId: string[]
}

export type OrderDto = {
  id: string
  userId: string
  cartId: string
  status: string
  createdAt: string
}
