const { factorialIterative, factorialRec } = require('../factorial-calculator');

describe('factorial-calculator tests', () => {
    describe('factorialIterative test', () => {
        test.each([
            [0, 0],
            [1, 1],
            [7, 5040],
            [11, 39916800],
        ])('function accept number:%s then return number:%s', (num, res) => {
            expect(factorialIterative(num)).toBe(res);
        });
    });
    describe('factorialRec test', () => {
        test.each([
            [0, 0],
            [1, 1],
            [7, 5040],
            [11, 39916800],
        ])('function accept number:%s then return number:%s', (num, res) => {
            expect(factorialRec(num)).toBe(res);
        });
    });
});
