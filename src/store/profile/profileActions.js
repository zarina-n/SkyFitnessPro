import { createAsyncThunk } from '@reduxjs/toolkit'

export const userCourses = createAsyncThunk(
  'profile/userCourses',
  async (id, { extra: { apiClient, api }, rejectWithValue }) => {
    try {
      const response = await apiClient.get(api.USER_COURSES(id))

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

export const newCourse = createAsyncThunk(
  'profile/newCourse',
  async (
    { id, idCourse, name, pathName },
    { extra: { apiClient, api }, rejectWithValue }
  ) => {
    try {
      const response = await apiClient.post(api.ADD_COURSE(id), {
        _id: idCourse,
        name: name,
        pathName: pathName,
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
