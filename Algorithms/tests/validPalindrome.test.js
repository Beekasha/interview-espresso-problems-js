const validPalindrome = require('../validPalindrome')

test('returns true for a valid palindrome', () => {
    expect(validPalindrome('racecar')).toBe(true)
})

test('returns false for a non-valid palindrome', () => {
    expect(validPalindrome('Keanu Reeves')).toEqual(false)
})