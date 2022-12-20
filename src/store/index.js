import { configureStore } from '@reduxjs/toolkit'
import { userReducer } from './user/userSlice'
import { coursesReducer } from './courses/coursesSlice'
import { workoutsReducer } from './workouts/workoutsSlice'
import { profileReducer } from './profile/profileSlice'
import * as api from '../http/config'
import { apiClient } from '../http/http'

export const store = configureStore({
  reducer: {
    user: userReducer,
    courses: coursesReducer,
    workouts: workoutsReducer,
    profile: profileReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: {
          apiClient,
          api,
        },
      },
    }),
})
