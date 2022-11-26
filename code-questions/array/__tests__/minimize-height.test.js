const { getMinDiff } = require('../minimize-height');

describe('minimize-height tests', () => {
    test.each([
        [[3, 9, 12, 16, 20], 3, 11],
        [[1, 5, 8, 10], 2, 5],
        [[1, 1, 1, 2], 3, 1],
        [[1, 1, 1], 3, 0],
        [[-6000, 2000, 8000], 7000, 8000],
        [[50, 20, 10], 10, 20],
        [[100, 20, 30], 5, 70],
        [[100, 10, 15], 5, 80],
        [[], 5, undefined],
    ])(
        'function accepts arr: %s and k: %s, than return res: %s',
        (arr, k, res) => {
            expect(getMinDiff(arr, k)).toBe(res);
        }
    );
});
