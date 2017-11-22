const hasEmpty = require('../../src/modules/lang/hasEmpty')
const expect = require('chai').expect

describe('判断是否有空的成员', () => {
  it('1 --> false', () => {
    expect(hasEmpty(1)).to.not.ok
  })
  it('1, true --> false', () => {
    expect(hasEmpty(1, true)).to.be.not
  })
  it('呵呵, true --> false', () => {
    expect(hasEmpty('呵呵', false)).to.be.not
  })
  it('1, {}, true --> true', () => {
    expect(hasEmpty(1, {}, true)).to.be.ok
  })
  it('[] 咔咔咔 111 --> true', () => {
    expect(hasEmpty([], '咔咔咔', 111)).to.be.ok
  })
})