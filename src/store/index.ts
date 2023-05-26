import { combineReducers, configureStore } from '@reduxjs/toolkit'
import cartReducer from './slices/cart.slice'
import counterReducer from './slices/counter.slice'
import foodReducer, { fetchFoods } from './slices/food.slice'
import userSlice from './slices/user.slice'

const rootReducer = combineReducers({
  counter: counterReducer,
  cart: cartReducer,
  foods: foodReducer,
  user: userSlice
})

const store = configureStore({
  reducer: rootReducer
})

export type AppState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch
export default store

// Dispatch the thunk
store.dispatch(fetchFoods())
