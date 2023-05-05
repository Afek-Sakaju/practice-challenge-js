const { distinictSum } = require('../distinct-numbers-sums');

describe('distinct-sum tests', () => {
    test.each([
        [
            [1, 2],
            [0, 1, 2, 3],
        ],
        [
            [1, 2, 3],
            [0, 1, 2, 3, 4, 5, 6],
        ],
        [
            [1, 2, 3, 4],
            [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        ],
    ])('function accept set: %s, then return res: %s', (set, res) => {
        expect(distinictSum(set)).toEqual(res);
    });
});
