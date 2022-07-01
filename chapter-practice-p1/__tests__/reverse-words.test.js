const { reverseWords } = require('../reverse-words');

describe('reverse-words tests', () => {
    test.each([
        ['Just 👍 That!', 'That! 👍 Just'],
        ['123 456 789', '789 456 123'],
        ['michael jackson', 'jackson michael'],
        ['lionel messi the king', 'king the messi lionel'],
        ['consume more vitamine c', 'c vitamine more consume'],
        ['', ''],
        ['ab', 'ab'],
        ['1', '1'],
    ])('function accepts string:"%s" ,than return:"%s"', (str, result) => {
        expect(reverseWords(str)).toBe(result);
    });
});
