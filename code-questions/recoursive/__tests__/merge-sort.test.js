const { mergeSort } = require('../merge-sort');

describe('merge-sort tests', () => {
    test.each([
        [
            [1, 3, 4, 5, 6, 7, -9, 0, 2],
            [-9, 0, 1, 2, 3, 4, 5, 6, 7],
        ],
        [
            [41, 3, 5, 6, 7, -9, 0, 2],
            [-9, 0, 2, 3, 5, 6, 7, 41],
        ],
        [
            [-1, -9, -88, 0, -4, 2],
            [-88, -9, -4, -1, 0, 2],
        ],
        [
            [1, 2, 3],
            [1, 2, 3],
        ],
        [
            [32, -7],
            [-7, 32],
        ],
        [
            [3, 2, 1, 0],
            [0, 1, 2, 3],
        ],
        [[], []],
    ])('function accepts arr: %s, than return result: %s', (arr, res) => {
        expect(mergeSort(arr)).toEqual(res);
    });
});
