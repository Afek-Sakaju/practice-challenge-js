const { maxSubarraySum } = require('../max-subarray-sum');

describe('max-subarray-sum tests', () => {
    test.each([
        [[1, 2, 3, -2, 5], 9],
        [[-1, -2, -3, -4], -1],
        [[7, 9, -99, 1, 100], 101],
        [[1, 4, 0, 4, 0, -3, 7], 13],
    ])('function accept arr: %s then return sum: %s', (arr, res) => {
        expect(maxSubarraySum(arr)).toBe(res);
    });
});
