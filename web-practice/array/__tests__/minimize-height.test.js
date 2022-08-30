const { getMinDiff } = require('../minimize-height');

describe('minimize-height tests', () => {
    test.each([
        [[3, 9, 12, 16, 20], 3, 11],
        [[1, 5, 8, 10], 2, 5],
        [[1, 1, 1, 2], 3, 1],
        [[1, 1, 1], 3, 0],
        [[-6000, 2000, 8000], 7000, 8000],
    ])(
        'function accepts arr: %s and num: %s, than return res: %s',
        (arr, k, res) => {
            expect(getMinDiff(arr, k)).toBe(res);
        }
    );
    test.each([
        [[-20, -3, -9, -12, -16], 12],
        [[-1, -5, -900, 101], 750],
        [[-3, 4, 7, 9], 2],
        [[-8], 3],
    ])(
        'function accepts arr: %s and num: %s, than return undefined',
        (arr, k) => {
            expect(getMinDiff(arr, k)).toBe(undefined);
        }
    );
});
