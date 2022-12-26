const databaseURL = process.env.REACT_APP_DATABASE_URL

export const BASE_URL = `${databaseURL}`

//courses //free //get
export const COURSES = '/courses.json?print=pretty'

//workouts //free //get
export const WORKOUTS = '/workouts.json?print=pretty'

//user //protected //patch //get
export const USER_LOGIN = (id) => `/users/${id}.json?print=pretty`
export const USER_PASSWORD = (id) => `/users/${id}/password.json?print=pretty`

//profile //protected //get //post
export const USER_COURSES = (id) => `/users/${id}/courses.json?print=pretty`
export const ADD_COURSE = (id) => `/users/${id}/courses.json?print=pretty`

export const ADD_PROGRESS = (id, courseId, workoutIndex) =>
  `/users/${id}/courses/${courseId}/workouts/${workoutIndex}/.json?print=pretty`
