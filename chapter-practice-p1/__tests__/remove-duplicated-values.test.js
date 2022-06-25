const {
    removeDuplicated,
    removeDuplicatedAlt,
} = require('../remove-duplicated-values');

describe('remove duplicated items tests', () => {
    describe('function "removeDuplicated" tests', () => {
        test.each([
            [
                [1, 2, 3, 1, 2, 3],
                [1, 2, 3],
            ],
            [[1, 1, 1, 1, 1, 1, 1], [1]],
            [
                [1, 0, 2, 2],
                [1, 0, 2],
            ],
            [[], []],
            [
                [1, 2, 3, 1, 2, 3, 4],
                [1, 2, 3, 4],
            ],
            [
                [1, 1, 2, 2],
                [1, 2],
            ],
            [
                [1, 2, 3],
                [1, 2, 3],
            ],
        ])(
            'function gets array: %s ,than remove duplicated and return: %s',
            (arr, res) => {
                expect(removeDuplicated(arr)).toEqual(res);
            }
        );
    });
    describe('function "removeDuplicatedAlt" tests', () => {
        test.each([
            [
                [1, 2, 3, 1, 2, 3],
                [1, 2, 3],
            ],
            [[1, 1, 1, 1, 1, 1, 1], [1]],
            [
                [1, 0, 2, 2],
                [1, 0, 2],
            ],
            [[], []],
            [
                [1, 2, 3, 1, 2, 3, 4],
                [1, 2, 3, 4],
            ],
            [
                [1, 1, 2, 2],
                [1, 2],
            ],
            [
                [1, 2, 3],
                [1, 2, 3],
            ],
        ])(
            'function gets array: %s ,than remove duplicated and return: %s',
            (arr, res) => {
                expect(removeDuplicatedAlt(arr)).toEqual(res);
            }
        );
    });
});
