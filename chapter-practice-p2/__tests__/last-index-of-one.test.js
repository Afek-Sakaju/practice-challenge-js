const { lastIndex } = require('../last-index-of-one');

describe('last-index-of-one tests', () => {
    describe('good cases', () => {
        test.each([
            ['00001', 4],
            ['01001', 4],
            ['000001001', 8],
            ['01', 1],
            ['01896554145585', 8],
            ['1', 0],
            ['1!##@#!!@%$@#asdasdag9292929299292929', 0],
        ])('function accepts string: %s, than return index %s', (str, num) => {
            expect(lastIndex(str)).toBe(num);
        });
    });
    describe('bad cases', () => {
        test.each([
            ['000099'],
            [''],
            ['00000one00zero'],
            ['00000'],
            ['089655445585'],
            ['6545443-hello'],
            ['902!##@#!!@%$@#abcsnfjwi'],
        ])('function accepts string: %s, than return -1', (str) => {
            expect(lastIndex(str)).toBe(-1);
        });
    });
});
