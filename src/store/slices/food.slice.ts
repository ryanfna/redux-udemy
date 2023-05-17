import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { database } from 'config/firebase.config'
import { collection, getDocs } from 'firebase/firestore'
import { AppState } from 'store'
import { FoodDto } from 'types'

const COLLECTION_NAME = 'foods'

export const fetchFoods = createAsyncThunk('data/fetchData', async () => {
  const docRef = await getDocs(collection(database, COLLECTION_NAME))
  const data = docRef.docs.map(doc => ({ ...doc.data(), id: doc.id }))
  return data // Return the retrieved data
})

type Status = 'idle' | 'loading' | 'succeeded' | 'failed'
interface FoodState {
  foods: FoodDto[]
  status: Status
  error: string | null
}

const initialState: FoodState = {
  foods: [],
  status: 'idle',
  error: null || ''
}

const foodSlice = createSlice({
  name: 'foods',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchFoods.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(fetchFoods.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.foods = state.foods.concat(action.payload as any)
      })
      .addCase(fetchFoods.rejected, (state, action) => {
        state.status = 'failed'
        state.error = "Couldn't fetch foods"
      })
  }
})

export const { actions } = foodSlice
export const selectAllFoods = (state: AppState) => state.foods.foods
export const selectFoodById = (state: AppState, foodId: string) =>
  state.foods.foods.find((food: FoodDto) => food.id === foodId)
export default foodSlice.reducer
