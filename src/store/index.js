import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
/**
 * @description 批量导入所有vuex的模块，利用webpack的能力
 */
const files = require.context('./modules', false, /\.js$/)

const modules = {}
files.keys().forEach((key) => {
  modules[key.replace(/(\.\/|\.js)/g, '')] = files(key).default
})
Object.keys(modules).forEach((key) => {
  modules[key]['namespaced'] = true
})

const store = new Vuex.Store({
  modules,
})
export default store
