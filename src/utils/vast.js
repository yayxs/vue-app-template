const install = (Vue, options = {}) => {
  Vue.prototype.$baseEventBus = new Vue()
}
export default install
