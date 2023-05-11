const { findSubString } = require('../smallest-distinct');

describe('shuffle-name tests', () => {
    test.each([
        ['GEEKSGEEKSFOR', 8],
        ['AABBBCBBAC', 3],
        ['aaab', 2],
    ])('function accepts full-name:"%s" ,then return: "%s"', (name1, name2) => {
        expect(findSubString(name1)).toBe(name2);
    });
});
