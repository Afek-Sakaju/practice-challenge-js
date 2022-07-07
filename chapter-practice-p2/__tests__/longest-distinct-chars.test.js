const { longestSubstrDistinctChars } = require('../longest-distinct-chars');

describe('longest-distinct-chars tests', () => {
    describe('good cases', () => {
        test.each([
            ['geeks', 4],
            ['aaa', 1],
            ['aabbaa', 2],
            ['6abc66666', 4],
            ['0123456789', 10],
            ['12345abcde', 10],
            ['', 0],
            ['95999', 2],
            ['123123123123123123123', 3],
            [' dude dude ', 4],
            ['@abc@^%', 6],
        ])('function accept str: %s than return %s', (str, res) => {
            expect(longestSubstrDistinctChars(str)).toBe(res);
        });
    });
});
