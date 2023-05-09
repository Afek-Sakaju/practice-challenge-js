const { sortMemo, sort } = require('../sort-array-of-012');

describe('sort array of 012 tests', () => {
    describe('sortMemo tests', () => {
        describe('good cases', () => {
            test.each([
                [
                    [0, 0, 1, 2, 2, 0, 0, 1],
                    [0, 0, 0, 0, 1, 1, 2, 2],
                ],
                [
                    [2, 2, 0, 2, 2, 0],
                    [0, 0, 2, 2, 2, 2],
                ],
                [
                    [0, 0, 1, 0],
                    [0, 0, 0, 1],
                ],
                [
                    [0, 1, 2],
                    [0, 1, 2],
                ],
                [[0], [0]],
                [[], []],
            ])('function accept arr: %s then return arr:%s', (arr, res) => {
                expect(sortMemo(arr)).toEqual(res);
            });
        });
        describe('bad cases', () => {
            test.each([
                [[0, 0, 1, 'abc', 2, 0, 5, 1]],
                [[2, 1, 0, '2', 2, 2]],
                [[0, 1, 2, 3]],
                [[4, 9]],
            ])(
                'function accept invalid arr: %s then returns undefined',
                (arr) => {
                    expect(sortMemo(arr)).toBeFalsy();
                }
            );
        });
    });

    describe('sort tests', () => {
        describe('good cases', () => {
            test.each([
                [
                    [0, 0, 1, 2, 2, 0, 0, 1],
                    [0, 0, 0, 0, 1, 1, 2, 2],
                ],
                [
                    [2, 2, 0, 2, 2, 0],
                    [0, 0, 2, 2, 2, 2],
                ],
                [
                    [0, 0, 1, 0],
                    [0, 0, 0, 1],
                ],
                [
                    [0, 1, 2],
                    [0, 1, 2],
                ],
                [[0], [0]],
                [[], []],
            ])('function accept arr: %s then return arr:%s', (arr, res) => {
                expect(sort(arr)).toEqual(res);
            });
        });
        describe('bad cases', () => {
            test.each([
                [[0, 0, 1, 'abc', 2, 0, 5, 1]],
                [[2, 1, 0, '2', 2, 2]],
                [[0, 1, 2, 3]],
                [[4, 9]],
            ])(
                'function accept invalid arr: %s then returns undefined',
                (arr) => {
                    expect(sort(arr)).toBeFalsy();
                }
            );
        });
    });
});
