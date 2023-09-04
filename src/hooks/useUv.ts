// 配置信息
import config from '@/uni_modules/uv-ui/libs/config/config.js'
// 颜色渐变相关
import * as colorGradient from '@/uni_modules/uv-ui/libs/function/colorGradient.js'
// 防抖方法
import debounce from '@/uni_modules/uv-ui/libs/function/debounce.js'
// 公共工具函数
import * as index from '@/uni_modules/uv-ui/libs/function/index.js'
// 平台
import platform from '@/uni_modules/uv-ui/libs/function/platform.js'
// 规则检验
import * as test from '@/uni_modules/uv-ui/libs/function/test.js'
// 节流方法
import throttle from '@/uni_modules/uv-ui/libs/function/throttle.js'
// 全局挂载引入http相关请求拦截插件
import Request from '@/uni_modules/uv-ui/libs/luch-request'

const uv = {
  config,
  platform,
  test,
  ...index,
  ...colorGradient,
  debounce,
  throttle,
  http: new Request()
}

export function useUv(): typeof uv {
  // @ts-ignore
  if (!uni.$uv) {
    // @ts-ignore
    uni.$uv = uv

    // 内部配置
    uv.setConfig({
      config: {
        unit: 'rpx'
      }
    })
    // http 配置
    uv.http.setConfig(config => {
      config.baseURL = '/api'
      config.timeout = 8000
      return config
    })
    uv.http.interceptors.response.use(
      res => {
        console.log(res)
        return res.data
      },
      err => {
        console.log(err)
        return Promise.reject(err)
      }
    )
  }

  // @ts-ignore
  return uni.$uv
}
