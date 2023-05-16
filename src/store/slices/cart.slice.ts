import { FoodDto } from '@/types'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { generateUUID } from '../../utils/faker'

export type CartItem = Partial<FoodDto>

const cartSlice = createSlice({
  name: 'cart',
  initialState: [] as CartItem[],
  reducers: {
    addCard: (state, action: PayloadAction<CartItem>) => {
      state.push({ ...action.payload, id: generateUUID() })
    },
    removeCard: (state, action: PayloadAction<string>) => {
      return state.filter(item => item.id !== action.payload)
    }
  }
})

export const { addCard, removeCard } = cartSlice.actions
export default cartSlice.reducer
