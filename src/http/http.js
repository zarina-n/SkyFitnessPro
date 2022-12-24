import axios from 'axios'
import * as api from './config'
import { revertAll } from '../store/generalActions'
import { store } from '../store'
import { KJUR } from 'jsrsasign'
import { auth } from '../firebase'

export const apiClient = axios.create({
  baseURL: api.BASE_URL,
  validateStatus: (status) => status < 500,
})

let refreshTokenRequest = null

async function requestValidAccessToken() {
  const user = store.getState().user
  let accessToken = user.token

  const {
    payloadObj: { exp: accessTokenExpires },
  } = KJUR.jws.JWS.parse(accessToken)
  const expireTime = accessTokenExpires
  const now = Math.floor(Date.now() * 0.001)

  if (now >= expireTime) {
    console.log('иду за новым токеном')
    if (refreshTokenRequest === null) {
      refreshTokenRequest = auth.currentUser.getIdToken()
    }

    const data = await refreshTokenRequest
    accessToken = data
    console.log(accessToken)
    refreshTokenRequest = null
  }

  return accessToken
}

apiClient.interceptors.request.use(async (config) => {
  if (config.skipAuth) {
    return config
  }

  const accessToken = await requestValidAccessToken()
  console.log(accessToken)

  return {
    ...config,
    url: `${config.url}&auth=${accessToken}`,
  }
})

apiClient.interceptors.response.use(
  (response) => {
    const {
      data: { errors },
      status,
    } = response

    if (status === 401) {
      console.log('401')
      store.dispatch(revertAll())
    } else if (errors) {
      console.log('ошибки', errors)
    }
    return response
  },
  (error) => Promise.reject(error)
)
