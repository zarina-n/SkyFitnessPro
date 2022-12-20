import { createAsyncThunk } from '@reduxjs/toolkit'

export const loadWorkouts = createAsyncThunk(
  'workouts/all',
  async (_, { extra: { apiClient, api }, rejectWithValue }) => {
    try {
      const response = await apiClient.get(api.WORKOUTS)
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
