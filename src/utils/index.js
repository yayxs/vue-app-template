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
