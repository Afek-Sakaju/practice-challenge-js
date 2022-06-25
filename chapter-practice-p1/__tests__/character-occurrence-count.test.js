const {
    countCharacters,
    countCharactersReduce,
} = require('../character-occurrence-count');

describe('character-occurrence-count tests', () => {
    describe('countCharacters function', () => {
        test.each([
            ['', {}],
            [
                '!!!hey',
                {
                    '!': 3,
                    h: 1,
                    e: 1,
                    y: 1,
                },
            ],
            [
                'hadriel',
                {
                    h: 1,
                    a: 1,
                    d: 1,
                    r: 1,
                    i: 1,
                    e: 1,
                    l: 1,
                },
            ],
            [
                'abcde',
                {
                    a: 1,
                    b: 1,
                    c: 1,
                    d: 1,
                    e: 1,
                },
            ],
            [
                'JUST LIKE THAT',
                {
                    J: 1,
                    U: 1,
                    S: 1,
                    T: 3,
                    ' ': 2,
                    L: 1,
                    I: 1,
                    K: 1,
                    E: 1,
                    H: 1,
                    A: 1,
                },
            ],
        ])(
            'function accepts str: %s, than return result: %s',
            (str, result) => {
                expect(countCharacters(str)).toEqual(result);
            }
        );
    });
    describe('countCharactersReduce function', () => {
        test.each([
            ['', {}],
            [
                '!!!hey',
                {
                    '!': 3,
                    h: 1,
                    e: 1,
                    y: 1,
                },
            ],
            [
                'hadriel',
                {
                    h: 1,
                    a: 1,
                    d: 1,
                    r: 1,
                    i: 1,
                    e: 1,
                    l: 1,
                },
            ],
            [
                'abcde',
                {
                    a: 1,
                    b: 1,
                    c: 1,
                    d: 1,
                    e: 1,
                },
            ],
            [
                'JUST LIKE THAT',
                {
                    J: 1,
                    U: 1,
                    S: 1,
                    T: 3,
                    ' ': 2,
                    L: 1,
                    I: 1,
                    K: 1,
                    E: 1,
                    H: 1,
                    A: 1,
                },
            ],
        ])(
            'function accepts str: %s, than return result: %s',
            (str, result) => {
                expect(countCharactersReduce(str)).toEqual(result);
            }
        );
    });
});
