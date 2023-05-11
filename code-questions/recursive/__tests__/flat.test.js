const { flat } = require('../flat');

describe('flat tests', () => {
    test('flat on array with 3 depth levels check', () => {
        const arr = [1, 2, [3, [4]], 5, [[6]]];
        const expected = [1, 2, 3, 4, 5, 6];

        expect(flat(arr)).toEqual(expected);
    });

    test('flat on array with 10 depth levels check', () => {
        const arr = [[[[[[[[[[1]]]]]]]], 1], [55, [4]], 'abc', [[6]]];
        const expected = [1, 1, 55, 4, 'abc', 6];

        expect(flat(arr)).toEqual(expected);
    });

    test('flat on array with 1 depth levels check', () => {
        const arr = [1, 2, 3, 4, 3, 2, 1];
        const expected = [1, 2, 3, 4, 3, 2, 1];

        expect(flat(arr)).toEqual(expected);
    });
});
