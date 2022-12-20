import { createSlice } from '@reduxjs/toolkit'
import { revertAll } from '../generalActions'
import { newLogin, newPassword, setUserPassword } from './usersActions'

const initialState = {
  login: null,
  password: null,
  email: null,
  token: null,
  id: null,
  loading: false,
  error: null,
  success: false,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      state.login = action.payload.login
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
    setLoading: (state, action) => {
      state.loading = action.payload
    },
    setError: (state, action) => {
      state.error = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(revertAll, () => initialState)
      // new login
      .addCase(newLogin.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(newLogin.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
      .addCase(newLogin.fulfilled, (state, action) => {
        state.loading = false
        state.success = true
        state.error = null
        state.login = action.payload.username
      })
      // new password
      .addCase(newPassword.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(newPassword.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
      .addCase(newPassword.fulfilled, (state, action) => {
        state.loading = false
        state.success = true
        state.error = null
        state.password = action.payload.password
      })
      //set password
      .addCase(setUserPassword.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(setUserPassword.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
      .addCase(setUserPassword.fulfilled, (state, action) => {
        state.loading = false
        state.success = true
        state.error = null
        state.password = action.payload
      })
  },
})

export const { setCurrentUser, setLogin, setPassword, setLoading, setError } =
  userSlice.actions

export const userReducer = userSlice.reducer

export const selectUser = (state) => state.user
