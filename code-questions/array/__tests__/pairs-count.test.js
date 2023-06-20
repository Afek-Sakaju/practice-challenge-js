const getPairsCount = require('./pairs-count.test');

describe('getPairsCount', () => {
    test.each([
        [[1, 5, 7, 1], 6, 2],
        [[1, 1, 1, 1], 2, 6],
        [[2, 4, 6, 8], 10, 0],
        [[3, 1, 5, 2, 4], 6, 3],
        [[-1, -2, 3, 4, -5], 2, 2],
        [[0, 0, 0, 0], 0, 6],
        [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 11, 2],
        [[], 5, 0],
        [[6], 6, 0],
    ])(
        'should return the correct number of pairs with sum equal to K',
        (arr, k, expected) => {
            expect(getPairsCount(arr, k)).toBe(expected);
        }
    );
});
