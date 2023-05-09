const { longestFlatSequence } = require('../longest-fiat-sequence');

describe('longest-flat-sequence tests', () => {
    test.each([
        [[3, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1], 11],
        [[4, -5, -6, -5, -6, 4, 3], 4],
        [[0, 1, 0, 5], 3],
        [[9, 2, 6, 5], 2],
        [[5], 1],
        [[], 0],
    ])('function accepts arr:"%s", then return:"%s"', (arr, res) => {
        expect(longestFlatSequence(arr)).toBe(res);
    });
});
