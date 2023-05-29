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
    increaseQuantity: (state, action: PayloadAction<string>) => {
      const item = state.find(item => item.id === action.payload)
      if (item) {
        item.quantity++
      }
    },
    decreaseQuantity: (state, action: PayloadAction<string>) => {
      const itemIndex = state.findIndex(item => item.id === action.payload)
      if (itemIndex !== -1) {
        // create a new copy of the item object instead of mutating it
        const updatedItem = {
          ...state[itemIndex],
          quantity: state[itemIndex].quantity - 1
        }

        // create new array and replace the item object at the specified index
        const newState = [...state]
        newState.splice(itemIndex, 1, updatedItem)

        // filter out the item whose quantity becomes zero after decreasing
        return newState.filter(item => item.quantity !== 0)
      }
      return state
    },
    removeCard: (state, action: PayloadAction<string>) => {
      return state.filter(item => item.id !== action.payload)
    },
    checkoutCart: _state => {
      return []
    }
  }
})

export const { addCard, removeCard, increaseQuantity, decreaseQuantity, checkoutCart } = cartSlice.actions
export default cartSlice.reducer
