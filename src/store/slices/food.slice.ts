import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { AppState } from '..'
import { getFoods } from '../../utils/faker'

const COLLECTION_NAME = 'foods'

export const fetchFoods = createAsyncThunk('data/fetchData', async () => {
  // const response = await getDocs(collection(database, COLLECTION_NAME))
  const response = await getFoods()
  console.log(response)
  return response // Return the retrieved data
})

const initialState = {
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
        // Add any fetched foods to the array
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
export default foodSlice.reducer
