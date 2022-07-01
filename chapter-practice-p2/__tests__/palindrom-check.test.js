const { isPalindrome, longestPalin } = require('../palindrom-check');

describe('palindrom-check tests', () => {
    describe('function isPalindrom tests', () => {
        describe('good cases', () => {
            test.each([
                ['12344321'],
                ['0'],
                ['afefa'],
                [''],
                ['22022022'],
                ['123abccba321'],
            ])("function return true for str: '%s'", (str) => {
                expect(isPalindrome(str)).toBeTruthy();
            });
        });
        describe('bad cases', () => {
            test.each([
                ['123O4'],
                ['#%'],
                ['hello'],
                ['hadriel'],
                ['justLikeThat'],
            ])("isPalindrome return false for '%s'", (str) => {
                expect(isPalindrome(str)).toBeFalsy();
            });
        });
    });
    describe('function longestPalin tests', () => {
        test.each([
            ['#%', '#'],
            ['hello', 'll'],
            ['12344321', '12344321'],
            ['0', '0'],
            ['afefa', 'afefa'],
            ['', ''],
            ['2202022', '2202022'],
            ['123abcba321', '123abcba321'],
            ['123O4', '1'],
            ['hadrieir', 'rieir'],
            ['justLikeThat', 'j'],
        ])('function accept string: %s than return result: %s', (str, res) => {
            expect(longestPalin(str)).toBe(res);
        });
    });
});
