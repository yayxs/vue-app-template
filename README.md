# vue3 vant4 shop mall vite

## Init Vite App

```sh
// docs : https://vitejs.dev/guide/#scaffolding-your-first-vite-project
$ yarn create @vitejs/app vue-app-template  // node 版本在 12 以上
```

### base vit.config.ts

```ts
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
});
```

## 工程规范化

### commit 规范

```bash
git add .
git cz  // 把commot 替换为 cz
```

```bash
feat：增加一个新功能
fix：修复bug
docs：只修改了文档
style：做了不影响代码含义的修改，空格、格式化、缺少分号等等
refactor：代码重构，既不是修复bug，也不是新功能的修改
perf：改进性能的代码
test：增加测试或更新已有的测试
chore：构建或辅助工具或依赖库的更新
```

### 代码规范

```bash
"lint:eslint": "eslint --ext .ts,vue --ignore-path .gitignore .",
"lint:prettier": "prettier --write --loglevel warn \"src/**/*.{js,json,tsx,css,less,scss,vue,html,md}\"",
"lint:stylelint": "stylelint src/**/*.{css,scss,vue}",
"lint:markup": "vti diagnostics"
```
