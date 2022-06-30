const { findSingle, findSingleWithObject } = require('../party-of-couples');

describe('party-of-couples function tests', () => {
    describe('findSingle function tests', () => {
        describe('good cases', () => {
            test.each([
                [[1, 2, 3, 2, 1], 3],
                [[3, 4, 4, 3, 9], 9],
                [[0, 4, 3, 3, 0], 4],
                [[0, 9, 1, 1, 0], 9],
                [[0, 77, 77], 0],
            ])(
                'get array %s of couples and return the only single number %s in it',
                (arr, res) => {
                    expect(findSingle(arr)).toBe(res);
                }
            );
        });
        describe('bad cases', () => {
            test.each([
                [[1, 2, 2, 1]],
                [[3, 3, 2, 2]],
                [[1, 1]],
                [[6, 7, 6, 7, 8, 8]],
                [[]],
            ])(
                'if array %s of couples have no single number, return undefined',
                (arr) => {
                    expect(findSingle(arr)).toBe(undefined);
                }
            );
        });
    });
    describe('findSingleWithObject function tests', () => {
        describe('good cases', () => {
            test.each([
                [[1, 2, 3, 2, 1], 3],
                [[3, 4, 4, 3, 9], 9],
                [[0, 4, 3, 3, 0], 4],
                [[0, 9, 1, 1, 0], 9],
                [[0, 77, 77], 0],
            ])(
                'get array %s of couples and return the only single number %s in it',
                (arr, res) => {
                    expect(findSingleWithObject(arr)).toBe(res);
                }
            );
        });
        describe('bad cases', () => {
            test.each([
                [[1, 2, 2, 1]],
                [[3, 3, 2, 2]],
                [[1, 1]],
                [[6, 7, 6, 7, 8, 8]],
                [[]],
            ])(
                'if array %s of couples have no single number, return undefined',
                (arr) => {
                    expect(findSingleWithObject(arr)).toBe(undefined);
                }
            );
        });
    });
});
