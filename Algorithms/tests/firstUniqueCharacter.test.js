const { expect } = require('@jest/globals')
const firstUniqChar = require('../firstUniqueCharacter')

test('returns the index of the first unique character', () => {
    expect(firstUniqChar('leetcode')).toEqual(0)
})

test('returns the index of the first unique character', () => {
    expect(firstUniqChar('testing')).toEqual(1)
})

test('returns the index of the first unique character', () => {
    expect(firstUniqChar('eeeeeccccc')).toEqual(-1)
})