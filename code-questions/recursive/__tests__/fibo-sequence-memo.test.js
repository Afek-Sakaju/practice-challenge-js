const { memoFibonacci } = require('../fibo-sequence-memo');

describe('fibonacci-memoized tests', () => {
    test.each([
        [1, 1],
        [2, 1],
        [3, 2],
        [5, 5],
        [10, 55],
        [14, 377],
    ])('function accept number: %s, and return result: %s', (num, result) => {
        expect(memoFibonacci(num)).toBe(result);
    });

    test.each([[0], [-1], [-14]])(
        'function accept number: %s, and return null',
        (num) => {
            expect(memoFibonacci(num)).toBe(null);
        }
    );
});
