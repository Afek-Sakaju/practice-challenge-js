const { findSum } = require('../sum-two-large-numbers');

describe('sum-two-large-numbers tests', () => {
    test.each([
        ['9', '1', 10],
        ['25', '23', 48],
        ['2077', '300', 2377],
    ])(
        'function accepts strings: %s & %s, then returns sum: %s',
        (str1, str2, res) => {
            expect(findSum(str1, str2)).toBe(res);
        }
    );
});
