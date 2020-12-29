/**
 * @description 个子配置：通用配置 路由配置
 */
const settingConfig = require('./setting.config')
const routerConfig = require('./router.config')
module.exports = Object.assign({}, settingConfig, routerConfig)
