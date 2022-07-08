const { memoFibo } = require('../fibonacci-memo');

describe('fibonacci-memo tests', () => {
    test.each([
        [0, 0],
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
    ])('function accept number: %s, than return: %s', (num, res) => {
        expect(memoFibo(num)).toBe(res);
    });
});
