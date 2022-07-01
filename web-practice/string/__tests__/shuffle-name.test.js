const { shuffle } = require('../shuffle-name');

describe('shuffle-name tests', () => {
    test.each([
        ['hello friends', 'friends hello'],
        ['054 7887', '7887 054'],
        ['dani alves', 'alves dani'],
        ['lionel messi', 'messi lionel'],
        ['vitamine c', 'c vitamine'],
        ['', ''],
        ['a b', 'b a'],
        ['1', '1'],
    ])('function accepts full-name:"%s" ,than return: "%s"', (name1, name2) => {
        expect(shuffle(name1)).toBe(name2);
    });
});
