import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  login: null,
  password: null,
  email: null,
  token: null,
  id: null,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.login = action.payload.login
      state.password = action.payload.password
      state.email = action.payload.email
      state.token = action.payload.token
      state.id = action.payload.id
    },
    removeUser: () => initialState,
  },
})

export const { setUser, removeUser } = userSlice.actions

export const userReducer = userSlice.reducer

export const selectUser = (state) => state.user
