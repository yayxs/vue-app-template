import type { defineConfig, UserConfig } from 'vite'; // defineConfig  ts 配置
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

function pathResolve(dir: string) {
  return resolve(__dirname, '.', dir);
}

const alias: Record<string, string> | Array<{ find: string | RegExp; replacement: string }> = {
  '/@/': pathResolve('src'),
};
/**
 * type {import('vite').UserConfig}
 */
// export default defineConfig(config);

export default (mode: 'development' | 'production'): UserConfig => {
  return {
    alias,
    plugins: [vue()],
  };
};
