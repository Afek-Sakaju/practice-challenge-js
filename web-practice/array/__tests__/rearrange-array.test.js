const { rearrange } = require('../rearrange-array');

describe('rearrange-array tests', () => {
    test.each([
        [
            [-5, -2, 5, 2, 4, 7, 1, 8, 0, -8],
            [5, -5, 2, -2, 4, -8, 7, 1, 8, 0],
        ],
        [
            [9, 4, -2, -1, 5, 0, -5, -3, 2],
            [9, -2, 4, -1, 5, -5, 0, -3, 2],
        ],
    ])('function accepts arr:%s, than return arr:%s', (arr, res) => {
        expect(rearrange(arr)).toEqual(res);
    });
});
