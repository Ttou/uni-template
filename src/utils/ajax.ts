import { Request } from 'sard-uniapp'

const ajax = new Request({
  baseURL: 'http://localhost/api'
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
