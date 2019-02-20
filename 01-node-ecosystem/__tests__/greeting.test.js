'use strict'

const greeting = require('../functions')

test('should log Welcome to 401', () => {
  expect(greeting.greeting()).toBe('Hello, welcome to 401!')
})