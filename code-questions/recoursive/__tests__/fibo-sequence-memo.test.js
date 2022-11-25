const { memoFibonacci } = require('../fibo-sequence-memo');

describe('fibonacci-memoized tests', () => {
    test.each([
        [1, 1],
        [2, 1],
        [3, 2],
        [4, 3],
        [5, 5],
        [6, 8],
        [7, 13],
        [8, 21],
        [9, 34],
        [10, 55],
        [14, 377],
    ])('function accept number: %s, and return result: %s', (num, result) => {
        expect(memoFibonacci(num)).toBe(result);
    });

    test.each([
        [0],
        [-1],
        [-2],
        [-3],
        [-4],
        [-5],
        [-6],
        [-7],
        [-8],
        [-9],
        [-10],
        [-14],
    ])('function accept number: %s, and return null', (num) => {
        expect(memoFibonacci(num)).toBe(null);
    });
});
