const { partyOfCouple } = require('../party-of-couples');

describe('party-of-couples function tests', () => {
    describe('good cases', () => {
        test.each([
            [[1, 2, 3, 2, 1], 3],
            [[3, 4, 4, 3, 9], 9],
            [[0, 4, 3, 3, 0], 4],
        ])(
            'get array %s of couples and return the only single number %s in it',
            (arr, expected) => {
                const result = partyOfCouple(arr);
                expect(result).toBe(expected);
            }
        );
    });
    describe('bad cases', () => {
        test.each([
            [[1, 2, 2, 1], undefined],
            [[3, 3, 2, 2], undefined],
            [[1, 1], undefined],
        ])(
            'if array %s of couples have no single number, return %s',
            (arr, expected) => {
                const result = partyOfCouple(arr);
                expect(result).toBe(expected);
            }
        );
    });
});
