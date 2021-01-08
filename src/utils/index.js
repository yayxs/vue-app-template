/**
 * 首字母大写
 * @param {string} str
 * @example myComp
 * @return {string} MyComp
 */
export function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}
/**
 * 通用组件名
 * @param str fileName
 * @example abc/tabbar.vue
 * @return {string} Tabbar
 */
export function validateFileName(str) {
  return (
    /^\S+\.vue$/.test(str) &&
    str.replace(/^\S+\/(\w+)\.vue$/, (rs, $1) => capitalizeFirstLetter($1))
  )
}
export function isProd() {
  return process.env.NODE_ENV === 'production'
}

export function isPre() {
  return process.env.VUE_APP_PREVIEW === 'true'
}
/**
 * 获取get请求的拼接参数
 * @param {*} options
 */
export const getQueryParameters = (options) => {
  const url = options.url
  const search = url.split('?')[1]
  if (!search) {
    return {}
  }
  return JSON.parse(
    '{"' +
      decodeURIComponent(search)
        .replace(/"/g, '\\"')
        .replace(/&/g, '","')
        .replace(/=/g, '":"') +
      '"}'
  )
}
