import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { clearUser, getUser, storeUser } from 'utils/LocalStorageUtil'

const initialState = getUser()

const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    login: (state, action: PayloadAction<any>) => {
      state.id = action.payload.uid
      state.phone = action.payload.phoneNumber
      storeUser(state)
    },
    logout: (state, action: PayloadAction) => {
      state.id = ''
      state.phone = ''
      clearUser()
    }
  }
})

export const { logout, login } = userSlice.actions
export default userSlice.reducer
