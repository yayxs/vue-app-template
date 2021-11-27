import { defineConfig } from 'vite';
// https://vitejs.dev/guide/features.html#vue
import vue from '@vitejs/plugin-vue'; // 支持vue3单文件组件
// https://youzan.github.io/vant/v3/#/zh-CN/quickstart#fang-shi-er.-zai-vite-xiang-mu-zhong-an-xu-yin-ru-zu-jian
import styleImport from 'vite-plugin-style-import'; // 组件按需导入
// https://qastack.cn/programming/31173738/typescript-getting-error-ts2304-cannot-find-name-require
const path = require('path');
function resolve(dir: string) {
  return path.join(__dirname, dir);
}
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    styleImport({
      libs: [
        {
          libraryName: 'vant',
          esModule: true,
          resolveStyle: (name) => `vant/es/${name}/style`,
        },
      ],
    }),
  ],
  resolve: {
    // https://vitejs.dev/config/#resolve-alias
    alias: {
      '@': resolve('./src'),
      '@assets': resolve('./src/assets'),
      '@components': resolve('./src/components'),
      '@store': resolve('./src/store'),
      '@views': resolve('./src/views'),
    },
  },
});
