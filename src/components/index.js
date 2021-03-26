import Vue from 'vue'

const requireComponents = require.context('./', true, /\.vue$/)
requireComponents.keys().forEach(fileName => {
  const componentConfig = requireComponents(fileName)
  const componentName = componentConfig.default.name
  Vue.component(componentName, componentConfig.default || componentConfig)
})
