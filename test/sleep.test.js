const sleep = require('../src/modules/time/sleep')

describe('睡眠', function() {
  it('1.5秒后打印 get up !', async function() {
    await sleep(1500)
    console.log('get up !')
  })
})