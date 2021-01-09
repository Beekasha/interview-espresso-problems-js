const validParentheses = require('../validParentheses')

test('returns true for a valid Parentheses', () => {
    expect(validParentheses('()')).toBe(true)
})

test('returns true for a valid Parentheses', () => {
    expect(validParentheses('()[]{}')).toBe(true)
})

test('returns false for a non-valid Parentheses', () => {
    expect(validParentheses('(]')).toEqual(false)
})

test('returns false for a non-valid Parentheses', () => {
    expect(validParentheses('([)]')).toEqual(false)
})

test('returns true for a valid Parentheses', () => {
    expect(validParentheses('{[]}')).toBe(true)
})