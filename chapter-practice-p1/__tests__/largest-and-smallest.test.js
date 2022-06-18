const { getMaxAndMin } = require('../largest-and-smallest');

describe('largest-and-smallest tests', () => {
    test.each([
        [
            [10, 90, 20, 30, 40, 50, 60],
            [10, 90],
        ],
        [
            [1, 2, 3],
            [1, 3],
        ],
        [[10], [10, 10]],
    ])(
        'function accepts arr:%s, than return max and min: %s,%s',
        (arr, res) => {
            expect(getMaxAndMin(arr)).toEqual(res);
        }
    );
});
