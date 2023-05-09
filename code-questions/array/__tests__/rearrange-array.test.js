const { rearrange } = require('../rearrange-array');

describe('rearrange-array tests', () => {
    test.each([
        [
            [-5, -2, 5, 2, 4, 7, 1, 8, 0, -8],
            [5, -5, 2, -2, 4, -8, 7, 1, 8, 0],
        ],
        [
            [-5, 9, 0, 7, -90, -8, -33, -5],
            [9, -5, 0, -90, 7, -8, -33, -5],
        ],
        [
            [-10, -80, -90],
            [-10, -80, -90],
        ],
        [
            [10, 80, 90],
            [10, 80, 90],
        ],
        [
            [-9, 7],
            [7, -9],
        ],
        [[-5], [-5]],
        [[5], [5]],
        [[], []],
    ])('function accepts arr:%s, then return res:%s', (arr, res) => {
        expect(rearrange(arr)).toEqual(res);
    });
});
