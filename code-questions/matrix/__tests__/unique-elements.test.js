const { getUniqueElements } = require('../unique-elements');

describe('common-elements tests', () => {
    test.each([
        [
            [
                [1, 2, 3],
                [1, 2, 3],
                [4, 5, 6],
            ],
            [4, 5, 6],
        ],
        [
            [
                ['a', 'a', 'a'],
                ['b', 'b', 'b'],
                ['b', 'z', 'b'],
            ],
            ['z'],
        ],
        [[[1, 1, 1, 1, 1]], []],
        [[[6]], [6]],
        [[[], []], []],
    ])(
        'function accepts matrix: %s then returns unique elements :%s',
        (matrix, res) => {
            expect(getUniqueElements(matrix)).toEqual(res);
        }
    );
});
