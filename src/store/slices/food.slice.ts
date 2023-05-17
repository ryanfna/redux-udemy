import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { AppState } from 'store'
import { FoodDto } from 'types'
import { getFoods } from 'utils/faker'

const COLLECTION_NAME = 'foods'

export const fetchFoods = createAsyncThunk('data/fetchData', async () => {
  // const response = await getDocs(collection(database, COLLECTION_NAME))
  const response = await getFoods()
  return response // Return the retrieved data
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
