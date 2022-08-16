const { factDigit } = require('../fact-digit-sum');

describe('fact-digit-sum tests', () => {
    test.each([
        [5040, 7],
        [40321, 18],
    ])('function accept number:%s, than return %s', (num, res) => {
        expect(factDigit(num)).toBe(res);
    });
});
