const { merge } = require('../merge-without-extra-space');

describe('merge-without-extra-space tests', () => {
    test.each([
        [
            [1, 3, 5, 7],
            [0, 2, 6, 8, 9],
            [
                [0, 1, 2, 3],
                [5, 6, 7, 8, 9],
            ],
        ],
        [
            [1, 1, 1, 9],
            [2, 4, 5],
            [
                [1, 1, 1, 2],
                [4, 5, 9],
            ],
        ],
        [
            [3, 100, 200],
            [7, 10],
            [
                [3, 7, 10],
                [100, 200],
            ],
        ],
        [[9], [8], [[8], [9]]],
        [[], [0, 2, 6, 8, 9], [[], [0, 2, 6, 8, 9]]],
    ])(
        'function accepts arrays:"%s,%s" ,than returns result:"%s"',
        (arr1, arr2, res) => {
            expect(merge(arr1, arr2)).toEqual(res);
        }
    );
});
