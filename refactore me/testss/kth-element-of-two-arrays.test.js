const { kthElement } = require('../kth-element-of-two-arrays');

describe('kth-element-of-two-arrays tests', () => {
    test.each([
        [[2, 3, 6, 7, 9], [1, 4, 8, 10], 5, 6],
        [[100, 112, 256, 349, 770], [72, 86, 113, 119, 265, 445, 892], 7, 256],
        [[1, 2, 2, 3, 3, 3, 40], [55, 55, 58], 9, 55],
        [[10, 20, 30], [45, 100], 1, 10],
        [[1, 2, 3, 4], [], 3, 3],
        [[], [72, 86, 113, 119, 265, 445, 892], 4, 119],
    ])(
        'function accept two arrays:%s & %s and mumber:%s, then returns:%s',
        (arr1, arr2, k, expected) => {
            expect(kthElement(arr1, arr2, k)).toBe(expected);
        }
    );
});
