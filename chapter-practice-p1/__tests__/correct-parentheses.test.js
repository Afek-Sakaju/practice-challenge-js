const path = require('path');
const fs = require('fs');
const { correctParentheses } = require('../correct-parentheses');

describe('correct-parentheses tests', () => {
    describe('good tests', () => {
        test.each([['(()(()))()'], ['()'], ['()()'], [''], ['((()(())))']])(
            "function return true for '%s'",
            (str) => {
                expect(correctParentheses(str)).toBeTruthy();
            }
        );
    });
    describe('bad tests', () => {
        test.each([['((())()()'], [')('], [')()))'], [')((']])(
            "function return false for '%s'",
            (str) => {
                expect(correctParentheses(str)).toBeFalsy();
            }
        );
    });
    describe('Testing a file', () => {
        test.each([
            ['isPalindrome.test.js', true],
            ['onlyDigits.test.js', true],
        ])(
            "correctParentheses of file code: '%s' = expected to '%s'",
            (filename, expected) => {
                const filePath = path.resolve(__dirname, filename);
                const file = fs.readFileSync(filePath, 'utf-8');
                expect(correctParentheses(file, ['[', ']'])).toBe(expected);
            }
        );
    });
});
