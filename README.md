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
- 使用 HBuilderX 打开项目时，以 src 为根目录
- 微信小程序要支持 `vue3`，需设置基础库最低版本为 `2.11.2` 或以上，`2.11.2` 对应 `chrome>=53,ios>=10`
- uvUI 版本为 `1.1.11`，微信小程序基础库需要设置在 `2.19.2` 及以上，支付宝小程序需要开启 `component2` 模式
- uvUI 请去[NPM](https://npmmirror.com/package/@climblee/uv-ui/home) 下载产物包，替换 `uni_modules` 下 `uv-ui` 目录完成升级

## 待处理

- h5 下对自定义组件添加样式没有自定义组件自身的样式优先级高
