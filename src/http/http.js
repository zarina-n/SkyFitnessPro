import axios from 'axios'
import * as api from './config'

export const apiClient = axios.create({
  baseURL: api.BASE_URL,
  validateStatus: (status) => status < 500,
})
