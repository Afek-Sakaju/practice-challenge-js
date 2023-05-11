const { flat } = require('../flat');

describe('flat tests', () => {
    describe('good cases', () => {
        test.each([
            [
                [[[[[[[[[[1]]]]]]]], 1], [5, [5]], 'a', [[{ hello: 'world' }]]],
                [1, 1, 5, 5, 'a', { hello: 'world' }],
            ],
            [
                [1, 2, [3, [4]], 5, [[6]]],
                [1, 2, 3, 4, 5, 6],
            ],
            [
                [1, 2, 3],
                [1, 2, 3],
            ],
            [[2], [2]],
            [[], []],
        ])(
            'function accepts array: %s, then returns result: %s',
            (arr, res) => {
                expect(flat(arr)).toEqual(res);
            }
        );
    });

    describe('bad cases', () => {
        test.each([['string'], [{ name: 'david' }], [null]])(
            'function accepts invalid param: %s, then returns the param inside array as result',
            (param) => {
                expect(flat(param)).toEqual([param]);
            }
        );
    });
});
