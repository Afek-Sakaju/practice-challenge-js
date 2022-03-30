const { missingNumber } = require('../missing-number');

describe('missingNumber tests', () => {
    test.each([
        [[1,2,3,4,5], 6],
        [[0,-10,1,3,-20], 2],
        [[0,-10,1,1,3,-20], 2],
        [[0,-10,2,2,3,-20], 1],
        [[], 1],
        [[3,3,2,1], 4],
        [[1,1,4,1], 2],
        [[1,1,1,1], 2],
    ])('missingNumber of nums %o is %s', (nums, missingNum) => {
        expect(missingNumber(nums)).toBe(missingNum);
    });
});