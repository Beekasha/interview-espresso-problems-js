// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.


groupAnagrams = (strs) => {
    const ht = {};

    for (let str of strs) {
        const sorted = str.split('').sort().join('');
        if (ht[sorted]) ht[sorted].push(str);
        else ht[sorted] = [str];
    }

    return Object.values(ht);
}


























module.exports = groupAnagrams;