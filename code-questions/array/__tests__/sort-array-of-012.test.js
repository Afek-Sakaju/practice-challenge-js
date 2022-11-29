const { sortArr012 } = require('../sort-array-of-012');

describe('sort array of 012 tests', () => {
    test.each([
        [[], []],
        [[0], [0]],
        [
            [0, 0, 1, 0],
            [0, 0, 0, 1],
        ],
        [
            [2, 1, 0, 2, 2, 2],
            [0, 1, 2, 2, 2, 2],
        ],
        [
            [0, 0, 1, 2, 2, 0, 0, 1],
            [0, 0, 0, 0, 1, 1, 2, 2],
        ],
        [
            [0, 0, 1, 2, 2, 0, 0, 1],
            [0, 0, 0, 0, 1, 1, 2, 2],
        ],
    ])('function accept arr: %s than return arr:%s', (arr, res) => {
        expect(sortArr012(arr)).toEqual(res);
    });

    test.each([
        [[0, 0, 1, 9]],
        [[2, 1, 0, '2', 2, 2]],
        [[0, 0, 1, 'abc', 2, 0, 5, 1]],
        [[0, 0, 1, 2, 2, 0, 0, 1, 3]],
    ])('function accept arr: %s than returns undefined', (arr) => {
        expect(sortArr012(arr)).toBeFalsy();
    });
});
