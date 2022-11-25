import findPlatform from '../train-platform';

describe('train-platform tests', () => {
    test.each([
        [
            [0900, 0940, 0950, 1100, 1500, 1800],
            [0910, 1200, 1120, 1130, 1900, 2000],
            3,
        ],
        [[0900, 1100, 1235], [1000, 1200, 1240], 1],
    ])(
        'function accepts arrays: %s and %s, then return: %s',
        (arr, dep, res) => {
            expect(findPlatform(arr, dep)).toBe(res);
        }
    );
});
