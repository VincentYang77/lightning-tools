const _ = require('../../index')

/**
 * 判断是否有空的成员
 * @return {* Boolean} 判断结果
 */
function hasEmpty () {
  return [...arguments].some(value => {
    if (_.isArray(value)) {
      return value.length === 0
    } else if (_.isBoolean(value)) {
      return true
    } else if (_.isObject(value)) {
      return _.keys(value).length === 0
    }
    return !value
  })
}

module.exports = hasEmpty