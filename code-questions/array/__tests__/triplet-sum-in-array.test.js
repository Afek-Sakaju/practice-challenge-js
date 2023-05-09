const { find3Numbers } = require('../triplet-sum-in-array');

describe('triplet-sum-in-array tests', () => {
    test.each([
        [[1, 4, 45, 6, 10, 8], 13, true],
        [[1, 2, 4, 3, 6], 10, true],
        [[1, 2, 3], 6, true],
        [[1, 2, 3, 4, 5], 20, false],
        [[1, 4, 3, 6], 0, false],
        [[1, 4, 3], 10, false],
        [[1, 4], 5, false],
        [[4, 4], 10, false],
        [[5], 5, false],
        [[4], 5, false],
        [[], 1, false],
    ])('function accept array: %s, and x: %s then return %s', (arr, x, res) => {
        expect(find3Numbers(arr, x)).toBe(res);
    });
});
