'use strict'
const path = require('path')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const { publicPath, title, assetsDir, outputDir, lintOnSave, devPort, transpileDependencies } = require('./src/config')

const isProductionEnv = ['production', 'prod'].includes(process.env.NODE_ENV)
const resolve = dir => path.join(__dirname, dir)
const name = title || 'one-h5'
module.exports = {
  publicPath,
  outputDir,
  assetsDir,
  lintOnSave,
  transpileDependencies,
  productionSourceMap: false,
  devServer: {
    hot: true,
    port: devPort, // 端口
    open: true, // 启动后打开浏览器
    overlay: {
      warnings: false,
      errors: true
    },
    proxy: {
      '/api': {
        target: process.env.VUE_APP_BASE_API,
        // ws:true,
        changOrigin: true,
        pathRewrite: {
          '^/api': 'api'
        }
      },
      '/auth': {
        target: process.env.VUE_APP_BASE_API,
        changeOrigin: true,
        pathRewrite: {
          '^/auth': 'auth'
        }
      }
    }
  },
  css: {
    extract: isProductionEnv,
    sourceMap: false,
    loaderOptions: {
      scss: {
        prependData: `
          @import "~@/styles/mixin.scss";
          @import "~@/styles/variables.scss";
          `
      }
    }
  },
  configureWebpack: config => {
    config.name = name
  },

  chainWebpack: config => {
    config.plugins.delete('preload') // TODO: need test
    config.plugins.delete('prefetch') // TODO: need test

    // alias
    config.resolve.alias
      .set('@', resolve('src'))
      .set('assets', resolve('src/assets'))
      .set('api', resolve('src/api'))
      .set('views', resolve('src/views'))
      .set('components', resolve('src/components'))
      .set('utils', resolve('src/utils'))
      .set('config', resolve('src/config'))
      .set('styles', resolve('src/styles'))
      .set('store', resolve('src/store'))
    /**
     * 设置保留空格
     */
    config.module
      .rule('vue')
      .use('vue-loader')
      .loader('vue-loader')
      .tap(options => {
        options.compilerOptions.preserveWhitespace = true
        return options
      })
      .end()

    if (isProductionEnv) {
      config.plugin('webpack-report').use(BundleAnalyzerPlugin, [
        {
          analyzerMode: 'static'
        }
      ])
    }
    config.when(!isProductionEnv, config => config.devtool('cheap-source-map'))

    config.when(isProductionEnv, config => {
      config
        .plugin('ScriptExtHtmlWebpackPlugin')
        .after('html')
        .use('script-ext-html-webpack-plugin', [
          {
            inline: /runtime\..*\.js$/
          }
        ])
        .end()
      config.optimization.splitChunks({
        chunks: 'all',
        cacheGroups: {
          commons: {
            name: 'chunk-commons',
            test: resolve('src/components'),
            minChunks: 3,
            priority: 5,
            reuseExistingChunk: true
          },
          node_vendors: {
            name: 'chunk-libs',
            chunks: 'initial',
            test: /[\\/]node_modules[\\/]/,
            priority: 10
          },
          vantUI: {
            name: 'chunk-vantUI',
            priority: 20,
            test: /[\\/]node_modules[\\/]_?vant(.*)/
          }
        }
      })
      config.optimization.runtimeChunk('single')
    })
  }
}
