const { isSubset } = require('../is-subset-check');

describe('is-subset-check tests', () => {
    describe('good cases', () => {
        test.each([
            [[11, 1, 13, 21, 3, 7], [11, 3, 7, 1], 'Yes'],
            [[1, 2, 3, 4, 5, 6], [1, 2, 4], 'Yes'],
            [['a', 'b', 'c'], ['c'], 'Yes'],
            [['hello', 'w', 'o', 'r', 'l', 'd'], ['z', 'w', 'r'], 'No'],
            [[1, 23, 13, 1], [4], 'No'],
        ])(
            'function accepts two arrays: %s and %s, then return: %s',
            (arr1, arr2, res) => {
                expect(isSubset(arr1, arr2)).toBe(res);
            }
        );
    });

    describe('bad cases', () => {
        test.each([
            [[], [19, 5, 3], 'No'],
            [[19, 5, 3], [], 'Yes'],
            [[null, undefined], [null], 'Yes'],
            [[], [], 'Yes'],
        ])(
            'function accepts both arrays: %s and %s, then return: %s',
            (arr1, arr2, res) => {
                expect(isSubset(arr1, arr2)).toBe(res);
            }
        );
    });
});
