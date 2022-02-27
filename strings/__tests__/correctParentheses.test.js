const path = require('path');
const fs = require('fs');
const { correctParentheses } = require('../correctParentheses');

describe("correctParentheses tests", () => {
    test.each([
        ['isPalindrome.test.js', true],
        ['onlyDigits.test.js', true],
    ])("correctParentheses of file code: '%s' = expected to '%s'", (filename, expected) => {
        const filePath = path.resolve(__dirname, filename)
        const file = fs.readFileSync(filePath, 'utf-8');
        expect(correctParentheses(file,['[', ']'])).toBe(expected)
    })

    test.each([
        ['(()(()))()'],
        ['()'],
        ['()()'],
        [''],
    ])("correctParentheses return true for '%s'", (str) => {
        expect(correctParentheses(str)).toBeTruthy()
    })

    test.each([
        ['((())()()'],
        [')('],
    ])("correctParentheses return false for '%s'", (str) => {
        expect(correctParentheses(str)).toBeFalsy()
    })
})