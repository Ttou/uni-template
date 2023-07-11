import Request from 'luch-request'

const ajax = new Request({
  baseURL: '/api',
  timeout: 8000
})

ajax.interceptors.request.use(config => {
  return config
})

ajax.interceptors.response.use(
  res => {
    return res.data
  },
  err => {
    return Promise.reject(err)
  }
)

export { ajax }
