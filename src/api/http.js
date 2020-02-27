import axios from 'axios'

import { BASE_API, TOKEN_API } from '../util/Constant'

const http = axios.create({
  baseURL: BASE_API,
  timeout: 1000,
  headers: {
    'X-Auth-Token': TOKEN_API
  }
})

http.interceptors.request.use( (config) => {
  // Do something before request is sent
  if (!config.headers['X-Auth-Token']) {
    config.headers['X-Auth-Token'] = TOKEN_API
  }
  return config
}, (error) => {
  // Do something with request error
  return Promise.reject(error)
})

// Add a response interceptor
http.interceptors.response.use( (response) => {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  return response.data
}, (error) => {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(error)
})

export default http