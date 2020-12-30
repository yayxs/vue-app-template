/**
 * desc 响应体
 */
const responseBody = {
  message: '',
  timestamp: 0,
  result: null,
  code: 0,
}
/**
 *
 * @param {*} data 构造之前的响应数据
 * @param {*} message 信息
 * @param {*} code 响应code
 * @param {*} headers 响应头
 */
export const builder = (data, message, code = 0, headers = {}) => {
  responseBody.result = data
  if (message !== undefined && message !== null) {
    responseBody.message = message
  }
  if (code !== undefined && code !== 0) {
    responseBody.code = code
    responseBody._status = code
  }
  if (
    headers !== null &&
    typeof headers === 'object' &&
    Object.keys(headers).length > 0
  ) {
    responseBody._headers = headers
  }
  responseBody.timestamp = new Date().getTime()
  return responseBody
}
