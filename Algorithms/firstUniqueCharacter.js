// let firstUniqChar = function(s) {
//     const hashTable = {};

//     for (let char of s) {
//         if (hashTable[char]) hashTable[char]++;
//         else hashTable[char] = 1;
//     }

//     for (let i = 0; i < s.length; i++) {
//         const char = s[i];

//         if (hashTable[char] == 1) return i;
//     }

//     return -1;
// }

// console.log((firstUniqChar('leetcode') == 0))

// let firstUniqChar = function(s) {
//     for (let i = 0; i < s.length; i++) {
//         const char = s[i];
//         if (s.indexOf(char) === s.lastIndexOf(char)) {
//             return i;
//         }
//     }
//     return -1;
// }

const firstUniqChar = s => {
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (s.indexOf(char) === s.lastIndexOf(char)) {
            return i;
        }
    }
    return -1;
}





module.exports = firstUniqChar;

// console.log(firstUniqChar('leetcode'))
