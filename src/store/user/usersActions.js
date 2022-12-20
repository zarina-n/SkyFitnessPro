import { createAsyncThunk } from '@reduxjs/toolkit'

export const newLogin = createAsyncThunk(
  'user/newLogin',
  async ({ id, username }, { extra: { apiClient, api }, rejectWithValue }) => {
    try {
      const response = await apiClient.patch(api.USER_LOGIN(id), {
        username,
      })

      if (response.statusText !== 'OK') {
        throw new Error('Что-то пошло не так')
      }
      const { data } = await response
      return data
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

export const newPassword = createAsyncThunk(
  'user/newPassword',
  async ({ id, password }, { extra: { apiClient, api }, rejectWithValue }) => {
    try {
      const response = await apiClient.patch(api.USER_LOGIN(id), {
        password,
      })

      if (response.statusText !== 'OK') {
        throw new Error('Что-то пошло не так')
      }
      const { data } = await response
      return data
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

export const setUserPassword = createAsyncThunk(
  'user/setUserPassword',
  async (id, { extra: { apiClient, api }, rejectWithValue }) => {
    try {
      const response = await apiClient.get(api.USER_PASSWORD(id))

      if (response.statusText !== 'OK') {
        throw new Error('Что-то пошло не так')
      }
      const { data } = await response
      return data
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)
