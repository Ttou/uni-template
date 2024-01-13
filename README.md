# Uni Template

## 简介

Uni Template 是一个开源的小程序模版。

## 特性

- **技术栈**：使用 Vue3/UniApp/UvUI 等前端前沿技术开发
- **TypeScript**：应用程序级 JavaScript 的语言

## 准备

- [Node](http://nodejs.org/) 和 [Git](https://git-scm.com/)
- [Vue3](https://v3.cn.vuejs.org/guide/introduction.html)
- [UniApp](https://uniapp.dcloud.io/)
- [UvUI](https://www.uvui.cn/)

## 安装使用

- 获取项目代码

```bash
git clone https://gitee.com/jh_shot/uni-template.git
```

- 安装依赖

```bash
npm i
```

- 运行

```bash
npm run dev:mp-weixin
```

- 打包

```bash
npm run build:mp-weixin
```

## 注意事项

- 装上 volar 插件后更好的支持模板开发
- 使用 HBuilderX 调试或打包项目时，m1 的机器需要复制 `@esbuild/darwin-arm64` 为 `@esbuild/darwin-x64`
- 微信小程序要支持 `vue3`，需设置基础库最低版本为 `2.11.2` 或以上，`2.11.2` 对应 `chrome>=53,ios>=10`
- 使用 uvUI 时，微信小程序基础库需要设置在 `2.19.2` 及以上，支付宝小程序需要开启 `component2` 模式
- 长列表不要使用 scroll-view，[性能问题](https://uniapp.dcloud.net.cn/component/scroll-view.html#webviewtips)
- [滚动穿透](https://www.uvui.cn/components/problem.html#%E5%9B%9B%E3%80%81uv-popup%E7%AD%89%E7%BB%84%E4%BB%B6%E6%80%8E%E4%B9%88%E7%A6%81%E6%AD%A2%E6%BB%9A%E5%8A%A8%E7%A9%BF%E9%80%8F)

## 待处理
