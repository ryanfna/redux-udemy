import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { FoodDto } from 'types'

export type CartItem = Partial<FoodDto> & {
  quantity: number
}

const cartSlice = createSlice({
  name: 'cart',
  initialState: [] as CartItem[],
  reducers: {
    addCard: (state, action: PayloadAction<Partial<FoodDto>>) => {
      const item = state.find(item => item.id === action.payload.id)
      if (item) {
        item.quantity++
        return
      }
      state.push({ ...action.payload, quantity: 1 })
    },
    removeCard: (state, action: PayloadAction<string>) => {
      return state.filter(item => item.id !== action.payload)
    }
  }
})

export const { addCard, removeCard } = cartSlice.actions
export default cartSlice.reducer
