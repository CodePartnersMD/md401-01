'use strict'

const funcs = require('../functions')

test('a + b should equal the correct sum', () => {
  expect(funcs.add(2, 3)).toBe(5)
  expect(funcs.add(5, 7)).toBe(12)
})
