const { factDigit } = require('../fact-digit-sum');

describe('fact-digit-sum tests', () => {
    test.each([
        [40440, 58],
        [5040, 7],
        [0, 0],
        [3, 12],
        [21, 12333],
    ])('function accept number:%s, then return %s', (num, res) => {
        expect(factDigit(num)).toBe(res);
    });
});
