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
});
