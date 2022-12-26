import { createSlice } from '@reduxjs/toolkit'
import { revertAll } from '../generalActions'

import { addProgress, newCourse, userCourses } from './profileActions'

const initialState = {
  status: 'idle',
  error: null,
  list: [],
}

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(revertAll, () => initialState)
      //userCourses
      .addCase(userCourses.pending, (state) => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(userCourses.rejected, (state, action) => {
        state.status = 'rejected'
        state.error = action.payload
      })
      .addCase(userCourses.fulfilled, (state, action) => {
        state.status = 'received'
        state.error = null
        state.list = action.payload
      })
      //newCourse
      .addCase(newCourse.pending, (state) => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(newCourse.rejected, (state, action) => {
        state.status = 'rejected'
        state.error = action.payload
      })
      .addCase(newCourse.fulfilled, (state) => {
        state.status = 'received'
        state.error = null
      })
      //addProgress
      .addCase(addProgress.pending, (state) => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(addProgress.rejected, (state, action) => {
        state.status = 'rejected'
        state.error = action.payload
      })
      .addCase(addProgress.fulfilled, (state) => {
        state.status = 'received'
        state.error = null
      })
  },
})

export const { setCurrentUser, setLogin, setPassword, setLoading, setError } =
  profileSlice.actions

export const profileReducer = profileSlice.reducer

export const selectProfile = (state) => state.profile
export const selectProfileInfo = (state) => ({
  status: state.profile.status,
  error: state.profile.error,
})

export const selectUserCourses = (state) => state.profile.list
