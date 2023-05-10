const { doUnion } = require('../union-two-arrays');

describe('union-two-arrays tests', () => {
    test.each([
        [[5, 4, 10, 12], [5, 4], 4],
        [[1, 2, 3], [4, 5, 6], 6],
        [['hello', 'world', '2nd', 80], ['2nd', 80, 100, 90], 6],
        [[1, 2], [1, 2], 2],
        [[1], [1], 1],
        [[], [], 0],
    ])(
        'function accepts arr1: %s, and arr2: %s then returns unique elements count: %s',
        (arr1, arr2, result) => {
            expect(doUnion(arr1, arr2)).toBe(result);
        }
    );
});
