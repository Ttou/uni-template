// 配置信息
import config from '@/uni_modules/uv-ui-tools/libs/config/config'
// 颜色渐变相关
import * as colorGradient from '@/uni_modules/uv-ui-tools/libs/function/colorGradient'
// 防抖方法
import debounce from '@/uni_modules/uv-ui-tools/libs/function/debounce'
// 公共工具函数
import * as index from '@/uni_modules/uv-ui-tools/libs/function/index'
// 平台
import platform from '@/uni_modules/uv-ui-tools/libs/function/platform'
// 规则检验
import * as test from '@/uni_modules/uv-ui-tools/libs/function/test'
// 节流方法
import throttle from '@/uni_modules/uv-ui-tools/libs/function/throttle'
// 全局挂载引入http相关请求拦截插件
import Request from '@/uni_modules/uv-ui-tools/libs/luch-request'

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
