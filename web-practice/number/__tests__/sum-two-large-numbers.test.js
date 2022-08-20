const { findSum } = require('../sum-two-large-numbers');

describe('sum-two-large-numbers tests', () => {
    test.each([
        ['25', '23', 48],
        ['252', '254', 506],
        ['2077', '300', 2377],
        ['0007', '100', 107],
        ['9', '1', 10],
    ])(
        'function accepts strings: %s & %s, than returns sum: %s',
        (str1, str2, res) => {
            expect(findSum(str1, str2)).toBe(res);
        }
    );
});
