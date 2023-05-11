const { getDistinctChars } = require('../distinct-chars');

describe('distinct-chars tests', () => {
    test.each([
        ['AABBBBCCCCCC', 'ABC'],
        ['111111112', '12'],
        ['$ @', '$ @'],
        ['', ''],
    ])('function accepts string: %s ,then return: %s', (str, res) => {
        expect(getDistinctChars(str)).toBe(res);
    });
});
