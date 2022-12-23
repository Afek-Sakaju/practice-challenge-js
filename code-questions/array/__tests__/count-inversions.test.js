const { inversionCount } = require('../count-inversions');

describe('count-inversions tests', () => {
    test.each([
        [[5, 3, 2, 4, 1], 8],
        [[6, 3, 5, 2, 7], 5],
        [[2, 4, 1, 3, 5], 3],
        [[3, 2, 1], 3],
        [[], 0],
        [[2, 3, 4, 5, 6], 0],
        [[10, 10, 10], 0],
    ])(
        'function accepts arr:%s, then sort it and returns:%s inversions count',
        (arr, expected) => {
            expect(inversionCount(arr)).toBe(expected);
        }
    );
});
