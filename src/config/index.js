/**
 * desc 根据当前项目环境读取配置
 */

// 根据环境引入不同配置 process.env.NODE_ENV
// eslint-disable-next-line import/no-dynamic-require
const config = require(`./env.${process.env.VUE_APP_ENV}`);
module.exports = config;
