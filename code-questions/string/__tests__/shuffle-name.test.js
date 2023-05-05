const { shuffle } = require('../shuffle-name');

describe('shuffle-name tests', () => {
    describe('good cases', () => {
        test.each([
            ['hello friends', 'friends hello'],
            ['222 33', '33 222'],
            ['$ @', '@ $'],
        ])(
            'function accepts full name: %s ,then return: %s',
            (fullName, res) => {
                expect(shuffle(fullName)).toBe(res);
            }
        );
    });
    describe('bad cases', () => {
        test.each([
            ['lord of the rings', 'lord of the rings'],
            ['word', 'word'],
            [' ', ' '],
            ['', ''],
        ])(
            'function accepts invalid string: %s ,then return: %s',
            (fullName, res) => {
                expect(shuffle(fullName)).toBe(res);
            }
        );
    });
});
