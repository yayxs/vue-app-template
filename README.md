# Vue 3 + Typescript + Vite

- `vite` 本地服务器
- `node pro manage` use `pnpm`
- `setup` 语法：[script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup)
- `vscode插件` `volar` 替换 `vetur`
- `index.html` 项目的入口文件
- 支持多页应用 [docs](https://cn.vitejs.dev/guide/build.html#multi-page-app)

## 脚本

```bash
{
  "scripts": {
    "dev": "vite", # 启动开发服务器，别名：`vite dev`，`vite serve`
    "build": "vite build", # 为生产环境构建产物
    "preview": "vite preview" # 本地预览生产构建产物
  }
}
```

## `tsconfig`

|                                   |      |     |
| --------------------------------- | ---- | --- |
| compilerOptions.`isolatedModules` | true |     |
| useDefineForClassFields true      |      |     |
|                                   |      |     |

## `vite` 插件

- `@vitejs/plugin-vue` vue 3 单文件组件支持
- `vite-plugin-style-import` [按需引入组件](https://youzan.github.io/vant/v3/#/zh-CN/quickstart#fang-shi-er.-zai-vite-xiang-mu-zhong-an-xu-yin-ru-zu-jian)

## 项目基建

> Prettier 解决代码格式问题
> linters 解决代码质量问题

### prettier

- `.prettierrc.json` or `.prettierrc.js` 让编辑器和其他工具知道您正在使用 Prettier
- `.prettierignore` 让 `Prettier CLI` 和编辑器知道哪些文件不能格式化
- `eslint-config- prettier` ESLint 和 Prettier 相互配合 关闭与`prettier` 冲突的 eslint 规则

### Linter

### Git Hooks

### Commit 规范

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
