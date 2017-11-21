/**
 * 睡眠
 * @param {*毫秒} milliseconds
 */
function sleep (milliseconds) {
  return new Promise(resolve => {
    setTimeout(_ => resolve(), milliseconds)
  })
}

module.exports = sleep