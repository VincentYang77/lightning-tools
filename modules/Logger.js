/**
 * 日志工具
 * @author super2god
 */

/**
 * 信息
 * @param {*信息} msg
 * @param {*参数} params
 */
export function printInfo (msg, params) {
  console.log(`%c [info] ${msg} `, 'color: blue', params)
}

/**
 * 成功
 * @param {*信息} msg
 * @param {*数据} data
 */
export function printSuccess (msg, data) {
  console.log(`%c [success] ${msg} `, 'color: green', data)
}

/**
 * 错误
 * @param {*错误信息} error
 */
export function printError (error) {
  if (typeof error === 'object') {
    console.log('%c [error]', 'color: red', error)
  } else {
    console.log(`%c [error] ${error}`, 'color: red')
  }
}
