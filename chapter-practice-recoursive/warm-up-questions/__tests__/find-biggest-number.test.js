const { maxNum } = require('../find-biggest-number');

describe('find-biggest-number tests', () => {
    test.each([
        [[1, 5, 0, 2, 8, 4], 8],
        [[1, 2, 6], 6],
        [[7, 0, 8, 22, -2], 22],
        [[-9, -8, -7, 0], 0],
        [[7, 99, 22, -2], 99],
        [[-2], -2],
        [[], undefined],
    ])('function accepts arr: %s, than return num: %s', (arr, res) => {
        expect(maxNum(arr)).toBe(res);
    });
});
