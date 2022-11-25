const { digitsNum } = require('../digits-num');

describe('digits-sum tests', () => {
    test.each([
        [1, 10],
        [5, 500000],
        [8, 800000000],
        [10, 190000000000],
        [13, 490000000000000],
        [14, 5900000000000000],
        [20, 29900000000000000000000],
    ])('function accepts num:%s, then return result:%s', (num, res) => {
        expect(digitsNum(num)).toBe(res);
    });
    test.each([[0], [-1], [-5], [-8], [-10], [-13], [-14], [-20]])(
        'function accepts num:%s, then return null',
        (num) => {
            expect(digitsNum(num)).toBe(null);
        }
    );
});
