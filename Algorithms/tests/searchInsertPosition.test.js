const searchInsertPosition = require('../searchInsertPosition')

test('returns 2 for input nums=[1,3,5,6], target=5', () => {
    expect(searchInsertPosition([1,3,5,6], 5)).toBe(2)
})

test('returns 1 for input nums=[1,3,5,6], target=2', () => {
    expect(searchInsertPosition([1,3,5,6], 2)).toBe(1)
})

test('returns 4 for input nums=[1,3,5,6], target=7', () => {
    expect(searchInsertPosition([1,3,5,6], 7)).toBe(4)
})


test('returns 0 for input nums=[1,3,5,6], target=0', () => {
    expect(searchInsertPosition([1,3,5,6], 0)).toBe(0)
})

test('returns 0 for input nums=[1], target=0', () => {
    expect(searchInsertPosition([1], 0)).toBe(0)
})

