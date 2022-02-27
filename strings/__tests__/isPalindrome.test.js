const {isReversePalindrome, isLongestPalindrome} = require('../isPalindrome');

describe("isPalindrome tests", () => {
    test.each([
        ['12344321'],
        ['0'],
        [''],
        ['22022022']
    ])("isPalindrome return true for '%s'", (str) => {
        expect(isReversePalindrome(str)).toBeTruthy()
    })

    test.each([
        ['123O4'],
        ['#%'],
    ])("isPalindrome return false for '%s'", (str) => {
        expect(isReversePalindrome(str)).toBeFalsy()
    })
})

describe('isLongestPalindrome tests', () => {
    test.each([
        [{startIndex: 2, palindrome: 'aabxbaa'}, 'aaaabxbaac'],
    ])("isLongestPalindrome return '%o' for '%s'", (expected, str) => {
        const result = isLongestPalindrome(str);
        expect(result).toMatchObject(expected);
    })
})