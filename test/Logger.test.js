var lightning = require('../dist/index')

describe('日志工具', function() {
  it('打印信息', function() {
    lightning.Logger.printInfo('Info Message')
  })
  it('打印成功', function() {
    lightning.Logger.printSuccess('Success Message')
  })
  it('打印错误', function() {
    lightning.Logger.printError(new Error())
  })
})