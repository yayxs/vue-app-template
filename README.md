## First Start

```bash
yarn or npm i # 安装项目内依赖
yarn dev or npm run dev # 本地启动
```

## Build

```bash
yarn build or npm run build
```

## Lint

```bash
yarn lint or npm run lint
```

## Scripts

```json
{
  "dev": "vue-cli-service serve",
  "build": "vue-cli-service build",
  "build:report": "vue-cli-service build --report",
  "stage": "vue-cli-service build --mode staging",
  "lint": "vue-cli-service lint",
  "update": "ncu -u --reject sass-loader&&npm i"
}
```
