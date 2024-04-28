import { un } from '@uni-helper/uni-network'

const ajax = un.create({
  baseUrl: '/api',
  timeout: 8000
})

ajax.interceptors.request.use(config => {
  return config
})

ajax.interceptors.response.use(
  response => {
    return response
  },
  error => {
    return Promise.reject(error)
  }
)

export { ajax }
