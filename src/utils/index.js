// const baseTitle = title || ''
export function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle}`
  }
  return ``
}
/**
 * 是否是生产环境
 * @returns { Boolean }
 */
export function isProductionEnv() {
  return ['production', 'prod'].includes(process.env.NODE_ENV)
}
