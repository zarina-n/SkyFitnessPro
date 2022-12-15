import { createSlice } from '@reduxjs/toolkit'
import { revertAll } from '../generalActions'

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
    setCurrentUser: (state, action) => {
      state.email = action.payload.email
      state.token = action.payload.token
      state.id = action.payload.id
    },
    setLogin: (state, action) => {
      state.login = action.payload
    },
    setPassword: (state, action) => {
      state.password = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(revertAll, () => initialState)
  },
})

export const { setUser, setCurrentUser, setLogin, setPassword } =
  userSlice.actions

export const userReducer = userSlice.reducer

export const selectUser = (state) => state.user
