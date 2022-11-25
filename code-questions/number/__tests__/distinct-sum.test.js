const { distinictSum } = require('../distinct-sum');

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
    ])('function accept set: %s, than return res: %s', (set, res) => {
        expect(distinictSum(set)).toEqual(res);
    });
});
