const { doUnion } = require('../union-two-arrays');

describe('union-two-arrays tests', () => {
    test.each([
        [[1, 2, 3, 4, 5], [1, 2, 3], 5],
        [[85, 25, 1, 32, 54, 6], [85, 2], 7],
    ])(
        'function accept arr1: %s, and arr2: %s than return: %s',
        (arr1, arr2, result) => {
            expect(doUnion(arr1, arr2)).toBe(result);
        }
    );
});
