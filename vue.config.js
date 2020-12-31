// const IS_PROD = ['production', 'prod'].includes(process.env.NODE_ENV)
const path = require('path')
const { devPort } = require('./src/config')
module.exports = {
  devServer: {
    hot: true,
    port: '2021',
  },
  css: {
    requireModuleExtension: true,
    sourceMap: true,
    loaderOptions: {
      scss: {
        // 注入sass的variables到全局,详情: https://cli.vuejs.org/guide/css.html#passing-options-to-pre-processor-loaders
        additionalData(content, loaderContext) {
          const { resourcePath, rootContext } = loaderContext
          const relativePath = path.relative(rootContext, resourcePath)
          if (
            relativePath.replace(/\\/g, '/') !== 'src/styles/variables.scss'
          ) {
            return '@import "~@/styles/variables.scss";' + content
          }
          return content
        },
      },
    },
  },
}
