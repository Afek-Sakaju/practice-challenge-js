const { isSubset } = require('../is-subset-check');

describe('is-subset-check tests', () => {
    test.each([
        [[11, 1, 13, 21, 3, 7], [11, 3, 7, 1], 'Yes'],
        [[1, 2, 3, 4, 5, 6], [1, 2, 4], 'Yes'],
        [[10, 5, 2, 23, 19], [19, 5, 3], 'No'],
    ])(
        'function accepts two arrays: %s and %s, than return: %s',
        (arr1, arr2, res) => {
            expect(isSubset(arr1, arr2)).toBe(res);
        }
    );
});
