const { rotateArr } = require('../rotate-array');

describe('rotate-array tests', () => {
    test.each([
        [[1, 2, 3, 4, 5], 2, [3, 4, 5, 1, 2]],
        [[1, 3, 4, 5], 1, [3, 4, 5, 1]],
        [['a', 'b'], 5, ['b', 'a']],
        [['a', 'b', 'c'], 6, ['a', 'b', 'c']],
        [[1, 2, 3], 0, [1, 2, 3]],
        [
            [2, 4, 6, 8, 10, 12, 14, 16, 18, 20],
            3,
            [8, 10, 12, 14, 16, 18, 20, 2, 4, 6],
        ],
        [
            [2, 4, 6, 8, 10, 12, 14, 16, 18, 20],
            5,
            [12, 14, 16, 18, 20, 2, 4, 6, 8, 10],
        ],
        [[1, 3, 4, 5], -100, [1, 3, 4, 5]],
    ])(
        'function accept arr:%s, rotateCount:%s, then return result:%s',
        (arr, rotateCount, res) => {
            expect(rotateArr(arr, rotateCount)).toEqual(res);
        }
    );
});
