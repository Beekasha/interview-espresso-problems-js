let validPalindrome = str => {
    return (str.toLowerCase() === str.toLowerCase().split('').reverse().join(''))
}

module.exports = validPalindrome