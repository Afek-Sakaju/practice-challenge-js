const { anagramCheck } = require('../anagram-strings-check');

describe('anagram-strings-check tests', () => {
    describe('good cases tests', () => {
        test.each([
            ['yeh', 'hey'],
            ['boolean', 'naeloob'],
            ['', ''],
            ['hello world', 'dlrow olleh'],
            ['1234', '4321'],
            ['false', 'eslaf'],
            ['02', '20'],
        ])(
            'the function returns true for the strings: %s, %s',
            (str1, str2) => {
                expect(anagramCheck(str1, str2)).toBeTruthy();
            }
        );
    });
    describe('good cases tests', () => {
        test.each([
            ['afek', 'hey'],
            ['hadriel', '123'],
            ['123456', '65432'],
            ['1', 'a1'],
            ['', '6'],
            ['af08', 'af09'],
            ['hadr1el', 'h4dr1el'],
        ])(
            'the function returns true for the strings: %s, %s',
            (str1, str2) => {
                expect(anagramCheck(str1, str2)).toBeFalsy();
            }
        );
    });
});
