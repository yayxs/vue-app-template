import Vue from 'vue'
import { validateFileName, capitalizeFirstLetter } from '@/utils'

const requireComponent = require.context('.', true, /\.vue$/)

// 自动引入组件并注册
requireComponent.keys().forEach((filePath) => {
  const componentConfig = requireComponent(filePath)
  const fileName = validateFileName(filePath)
  const componentName =
    fileName.toLowerCase() === 'index'
      ? capitalizeFirstLetter(componentConfig.default.name)
      : fileName
  Vue.component(componentName, componentConfig.default || componentConfig)
})
