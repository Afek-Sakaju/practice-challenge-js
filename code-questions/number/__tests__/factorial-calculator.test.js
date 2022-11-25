const { factorialIterative, factorialRec } = require('../factorial-calculator');

describe('factorial-calculator tests', () => {
    describe('factorialIterative test', () => {
        test.each([
            [7, 5040],
            [11, 39916800],
            [9, 362880],
        ])('function accept number:%s than return number:%s', (num, res) => {
            expect(factorialIterative(num)).toBe(res);
        });
    });
    describe('factorialRec test', () => {
        test.each([
            [7, 5040],
            [11, 39916800],
            [9, 362880],
        ])('function accept number:%s than return number:%s', (num, res) => {
            expect(factorialRec(num)).toBe(res);
        });
    });
});
