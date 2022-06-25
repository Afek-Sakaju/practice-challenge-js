const { findDuplicated } = require('../find-duplicated-numbers');

describe('find-duplicated-numbers tests', () => {
    test.each([
        [
            [1, 2, 3, 4, 5, 6, 7, 7, 7, 7],
            [7, 7, 7],
        ],
        [
            [1, 1, 2, 3, 4, 5, 6, 6, 5],
            [1, 6, 5],
        ],
        [
            [9, 0, 9, 0, 9],
            [9, 0, 9],
        ],
        [
            [0, 1, 2, 3, 4, 0, 1, 2, 3, 4, 9],
            [0, 1, 2, 3, 4],
        ],
        [[0, 1, 2, 3, 4], []],
        [[0, 1, 2, 3, 4, 1], [1]],
    ])('function accept arr:%s, than return duplicated:%s', (arr, res) => {
        expect(findDuplicated(arr)).toEqual(res);
    });
});
