const { commonElements } = require('../common-elements');

describe('common-elements tests', () => {
    test.each([
        [
            [1, 5, 10, 20, 40, 80],
            [6, 7, 20, 80, 100],
            [3, 4, 15, 20, 30, 70, 80, 120],
            [20, 80],
        ],
        [
            [1, 5, 10, 20, 40, 80],
            [5, 6, 20, 80, 100],
            [3, 5, 15, 20, 30, 70, 80, 120],
            [5, 20, 80],
        ],
        [
            [1, 5, 10, 20, 40, 80],
            [6, 7, 29, 80, 100],
            [3, 4, 15, 20, 30, 70, 86, 120],
            [],
        ],
        [[65], [6, 65, 80, 100], [3, 4, 15, 20, 65, 70, 86, 120], [65]],
        [[1], [629, 80, 100], [70, 826, 120], []],
    ])(
        'function accepts 3 arrays:\n %s\n%s\n%s\n than return arr:%s',
        (arr1, arr2, arr3, res) => {
            expect(commonElements(arr1, arr2, arr3)).toEqual(res);
        }
    );
});
