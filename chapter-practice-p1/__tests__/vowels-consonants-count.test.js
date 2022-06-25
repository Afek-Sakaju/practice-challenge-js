const { vowelsConsonantsCount } = require('../vowels-consonants-count');

describe('countVowelsAndConsonantsCharacters tests', () => {
    test.each([
        ['K!@!@oAOa', { vowel: 4, consonants: 1, special: 4 }],
        ['b B b', { vowel: 0, consonants: 3, special: 2 }],
        ['', { vowel: 0, consonants: 0, special: 0 }],
        ['JUST LIKE THAT', { vowel: 4, consonants: 8, special: 2 }],
        ['hello', { vowel: 2, consonants: 3, special: 0 }],
        ['good morning!', { vowel: 4, consonants: 7, special: 2 }],
    ])('for the str: %s, function returns result: %s', (str, result) => {
        expect(vowelsConsonantsCount(str)).toEqual(result);
    });
});
