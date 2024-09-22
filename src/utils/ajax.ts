import { un } from '@uni-helper/uni-network'

const ajax = un.create({
  baseUrl: '/api',
  timeout: 8000
})

ajax.interceptors.request.use(req => {
  return req
})

ajax.interceptors.response.use(
  res => {
    return res
  },
  error => {
    return Promise.reject(error)
  }
)

export { ajax }
