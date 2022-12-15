import { createAsyncThunk } from '@reduxjs/toolkit'

export const loadCourses = createAsyncThunk(
  'courses/all',
  async (_, { extra: { apiClient, api }, rejectWithValue }) => {
    try {
      const response = await apiClient.get(api.COURSES)
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
