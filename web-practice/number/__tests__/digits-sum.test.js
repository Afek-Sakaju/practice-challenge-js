const { digitsNum } = require('../digits-num');

describe('digits-sum tests', () => {
    test.each([
        [20, 29900000000000000000000],
        [5, 500000],
    ])('function accepts num:%s, then return result:%s', (num, res) => {
        expect(digitsNum(num)).toBe(res);
    });
});
