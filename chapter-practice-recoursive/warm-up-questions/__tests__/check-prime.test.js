const { checkPrime } = require('../check-prime');

describe('check-prime tests', () => {
    describe('good cases', () => {
        test.each([
            [2],
            [3],
            [5],
            [7],
            [11],
            [13],
            [17],
            [19],
            [23],
            [29],
            [31],
            [41],
            [97],
        ])('function accept number: %s, than return true', (num) => {
            expect(checkPrime(num)).toBeTruthy();
        });
    });
    describe('bad cases', () => {
        test.each([
            [4],
            [6],
            [8],
            [10],
            [12],
            [14],
            [15],
            [58],
            [70],
            [100],
            [102],
            [120],
        ])('function accept number: %s, than return false', (num) => {
            expect(checkPrime(num)).toBeFalsy();
        });
    });
});
