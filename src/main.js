// 兼容 IE
// https://github.com/zloirock/core-js/blob/master/docs/2019-03-19-core-js-3-babel-and-a-look-into-the-future.md#babelpolyfill
import 'core-js/stable'
import 'regenerator-runtime/runtime'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'amfe-flexible/index'
// 按需引入UI库 vant
import '@/plugins/vant'
// 引入全局样式
import './styles/index.scss'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
