/**
 * Webpack打包入口
 */

const yuan2fen = require('./modules/unit/yuan2fen')
const fen2yuan = require('./modules/unit/fen2yuan')
const lodash = require('lodash')

module.exports = lodash.merge(lodash, { fen2yuan })