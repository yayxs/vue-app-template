import { defineConfig } from 'vite';
import path from 'path';
import vue from '@vitejs/plugin-vue'; // vue 支持
import styleImport from 'vite-plugin-style-import';
import legacy from '@vitejs/plugin-legacy';



// https://vitejs.dev/config/

/**
 * defineConfig 这样不用 jsdoc 注解也可以获取类型提示
 */
export default  defineConfig({
  root:process.cwd(), // index.html 文件所在的位置
  base:'/', // 开发或生产环境服务的公共基础路径。合法的值包括以下几种
  resolve: { 
    alias: {
      '@':path.resolve(__dirname, 'src'),
      'comps': path.resolve(__dirname, 'src/components'),
    },
  },
   css: {
    preprocessorOptions: {
      scss: {
        additionalData: `$injectedColor: orange;`
      }
    }
  },
  server:{
    host:'0.0.0.0',
    port:2222,
  },
  publicDir:'public',
  // 插件数组
  plugins: [
    vue(),
    legacy({
      targets: ['defaults', 'not IE 11'],
    }),
    styleImport({
      libs: [
        {
          libraryName: 'vant',
          esModule: true,
          resolveStyle: (name) => {
            return `vant/es/${name}/style`;
          },
        },
      ],
    }),
  ],
});
