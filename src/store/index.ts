import { combineReducers, configureStore } from '@reduxjs/toolkit'
import cartReducer from './slices/cart.slice'
import counterReducer from './slices/counter.slice'

const rootReducer = combineReducers({
  counter: counterReducer,
  cart: cartReducer
})

const store = configureStore({
  reducer: rootReducer
})

export type RootState = ReturnType<typeof rootReducer>
export default store
