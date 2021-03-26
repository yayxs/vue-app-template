/**
 * @description 3个子配置，通用配置 & 网络配置 & 路由配置
 */
const settingConfig = require('./setting.config')
const netConfig = require('./net.config')
const routerConfig = require('./router.config')
module.exports = Object.assign({}, settingConfig, netConfig, routerConfig)
