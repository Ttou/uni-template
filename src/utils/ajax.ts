import ajax from 'uni-ajax'

const instance = ajax.create({
  baseURL: '/api'
})

instance.interceptors.request.use(
  config => {
    return config
  },
  error => {
    // 处理请求错误
    return Promise.reject(error)
  }
)

instance.interceptors.response.use(
  response => {
    return response.data
  },
  error => {
    // 处理响应错误
    return Promise.reject(error)
  }
)

export { instance as ajax }
