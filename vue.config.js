const IS_PROD = ['production', 'prod'].includes(process.env.NODE_ENV);
// const defaultSettings = require('./src/config/index.js');

module.exports = {
  css: {
    extract: IS_PROD,
    requireModuleExtension: true,
    sourceMap: true,
    loaderOptions: {
      // 给 scss-loader 传递选项
      scss: {
        // 注入 `sass` 的 `mixin` `variables` 到全局,
        // 详情: https://cli.vuejs.org/guide/css.html#passing-options-to-pre-processor-loaders
        additionalData: `
        @import "~@/styles/mixin.scss";
        @import "~@/styles/variables.scss";
        `,
      },
    },
  },
};
