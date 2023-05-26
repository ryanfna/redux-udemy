import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { CartDto, FoodDto } from '@types'

const cartSlice = createSlice({
  name: 'cart',
  initialState: [] as CartDto[],
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
    },
    checkoutCart: state => {
      return (state = [])
    }
  }
})

export const { addCard, removeCard, checkoutCart } = cartSlice.actions
export default cartSlice.reducer
