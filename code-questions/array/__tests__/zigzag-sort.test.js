const { zigzagSort } = require('../zigzag-sort');

describe('zigzag-sort tests', () => {
    test.each([
        [
            [4, 6, 7, 8, 3, 2, 1],
            [4, 7, 6, 8, 2, 3, 1],
        ],
        [
            [4, 3, 7, 8, 6, 2, 1],
            [3, 7, 4, 8, 2, 6, 1],
        ],
        [
            [1, 4, 3, 2],
            [1, 4, 2, 3],
        ],
        [
            [2, 4, 3, 5],
            [2, 4, 3, 5],
        ],
        [
            [2, 4],
            [2, 4],
        ],
        [
            [4, 2],
            [2, 4],
        ],
        [[2], [2]],
        [[], []],
    ])(
        'function accept array: %s, then returns zigzag sorted arr: %s',
        (arr, res) => {
            expect(zigzagSort(arr)).toEqual(res);
        }
    );
});
