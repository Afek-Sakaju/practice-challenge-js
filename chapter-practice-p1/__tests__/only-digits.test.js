const { onlyDigits } = require('../only-digits');

describe('only-digits tests', () => {
    describe('good cases', () => {
        test.each([['1234'], ['0'], [''], ['12365448401324904013198']])(
            "function return true for string: '%s'",
            (str) => {
                expect(onlyDigits(str)).toBeTruthy();
            }
        );
    });
    describe('bad cases', () => {
        test.each([
            ['1234k'],
            ['a'],
            ['#%'],
            [undefined],
            [null],
            [[]],
            [{}],
            [false],
        ])("function return false for string: '%s'", (str) => {
            expect(onlyDigits(str)).toBeFalsy();
        });
    });
});
