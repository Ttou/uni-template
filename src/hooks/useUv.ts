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

const uv = {
  config,
  platform,
  test,
  ...index,
  ...colorGradient,
  debounce,
  throttle
}

export function useUv() {
  // @ts-ignore
  if (!uni.$uv) {
    // @ts-ignore
    uni.$uv = uv
  }

  return uv
}
