const { getPairsCount } = require('../pairs-count');

describe('pairs-count tests', () => {
    test.each([
        // [[1, 5, 7, 1], 6, 2],
        [[1, 1, 1, 1], 2, 6],
        [[3, 4], 7, 1],
        [[-1, -2, 3, 4], -3, 1],
        [[], 5, 0],
        [[6], 6, 0],
        [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 11, 5],
    ])(
        'function accepts arr:%s, and number k:%s, should return %s',
        (arr, k, expected) => {
            expect(getPairsCount(arr, k)).toBe(expected);
        }
    );
});
