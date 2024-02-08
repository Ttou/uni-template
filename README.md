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
- 使用 uvUI 时，微信小程序基础库需要设置在 `2.19.2` 及以上，支付宝小程序需要开启 `component2` 模式
- 不要使用 nvue 编写页面，问题和限制都很多，而且已经不维护了
- 长列表不要使用 scroll-view，[性能问题](http://z6b.cn/1jxwS)
- [滚动穿透](http://z6b.cn/utbko)

## 待处理
