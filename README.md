## Quickstart

```bash
1. yarn
2. yarn serve
```

## Scripts

```json
{
  "serve": "vue-cli-service serve --open",
  "stage": "vue-cli-service build --mode staging",
  "build": "vue-cli-service build"
}
```

## 适配方案

-[REM 适配 https://youzan.github.io/vant/#/zh-CN/quickstart#jin-jie-yong-fa](https://youzan.github.io/vant/#/zh-CN/quickstart#jin-jie-yong-fa)

> 基于[postcss-pxtorem](https://github.com/cuth/postcss-pxtorem) + [lib-flexible](https://github.com/amfe/lib-flexible)

```vue
<template>
  <div id="app">
    <!-- <router-view/> -->
    <img class="image" src="https://yayxs.github.io/avatar.jpg" />
  </div>
</template>
<style lang="scss">
/* 在重置样式的前提下，此时这张图片会充满屏幕 */
img {
  width: 750px;
  height: 1334px;
}
</style>
```

## 按需引入 UI 库

```
// 对于使用 babel7 的用户，可以在 babel.config.js 中配置
module.exports = {
  plugins: [
    ['import', {
      libraryName: 'vant',
      libraryDirectory: 'es',
      style: true
    }, 'vant']
  ]
};
```

## 样式处理

```
// src/styles
- index.scss 全局样式
- mixin.scss 混入
- normalize.scss 重置样式
- transition.scss Vue 过渡动画效果
- variables.scss 全局变量
```

### 修改组件库默认样式

- [不能修改 van-field 样式](https://github.com/youzan/vant/issues/6131)

```scss
.van-cell {
  height: 90px;
  width: 100vw;
  margin: 34px 0px;
  display: flex;
  /deep/ .van-field__label {
    color: red;
  }
}
```

## vue.config.js

有的时候你想要向 webpack 的预处理器 loader 传递选项。你可以使用 vue.config.js 中的 css.loaderOptions 选项。比如你可以这
样向所有 Sass/Less 样式传入共享的全局变量
