import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { UserDto } from '@types'
import { clearUser, getUser, storeUser } from 'utils/storage-local'

const initialState = getUser() as UserDto

const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    login: (state, action: PayloadAction<any>) => {
      console.log(action.payload)
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
