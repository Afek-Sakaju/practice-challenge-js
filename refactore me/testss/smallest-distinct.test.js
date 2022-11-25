const { findSubString } = require('../smallest-distinct');

describe('shuffle-name tests', () => {
    test.each([
        ['AABBBCBBAC', 3],
        ['aaab', 2],
        ['GEEKSGEEKSFOR', 8],
    ])('function accepts full-name:"%s" ,than return: "%s"', (name1, name2) => {
        expect(findSubString(name1)).toBe(name2);
    });
});
