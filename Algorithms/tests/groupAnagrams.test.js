const groupAnagrams = require('../groupAnagrams')

test('returns grouped anagrams', () => {
    // have to sort in order for the array equality to work
    expect(groupAnagrams(["eat","tea","tan","ate","nat","bat"].sort())).toEqual([["bat"],["nat","tan"],["ate","eat","tea"]].sort())
})

test('returns empty string when strs is an empty string', () => {
    expect(groupAnagrams([""])).toEqual([[""]])
})

test('returns single letter', () => {
    expect(groupAnagrams(["a"])).toEqual([["a"]])
})

