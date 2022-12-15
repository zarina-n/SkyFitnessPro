import { configureStore } from '@reduxjs/toolkit'
import { userReducer } from './user/userSlice'
import { coursesReducer } from './courses/coursesSlice'
import * as api from '../http/config'
import { apiClient } from '../http/http'

export const store = configureStore({
  reducer: {
    user: userReducer,
    courses: coursesReducer,
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
