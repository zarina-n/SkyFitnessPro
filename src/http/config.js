const databaseURL = process.env.REACT_APP_DATABASE_URL

export const BASE_URL = `${databaseURL}`

//courses //get
export const COURSES = '/courses.json?print=pretty'

//workouts //get
export const WORKOUTS = '/workouts.json?print=pretty'

//user //post
export const USER_LOGIN = (id) => `/users/${id}.json`
export const USER_PASSWORD = (id) => `/users/${id}/password.json`

//profile //get
export const USER_COURSES = (id) => `/users/${id}/courses.json?print=pretty`
export const ADD_COURSE = (id) => `/users/${id}/courses.json?print=pretty`
