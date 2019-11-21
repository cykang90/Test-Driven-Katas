const { expect } = require('chai')
const wrap = require('./wrap')

describe('wrap', () => {
  it('Returns empty string if empty string was provided', () => {
    expect(wrap('', 10)).to.equal('')
  })

  it('Returns a string', () => {
    expect(wrap('', 1)).to.be.a('string')
  })

  it('If the character after the max column length is a space, the line breaks after the column length', () => {
    expect(wrap('Lorem ipsum dolor sit eu amet, et', 17)).to.equal(
      'Lorem ipsum dolor\n sit eu amet, et'
    )
  })
})
