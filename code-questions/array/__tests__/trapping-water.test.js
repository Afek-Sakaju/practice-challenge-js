const { trappingWater } = require('../trapping-water');

describe('trapping-water tests', () => {
    test.each([
        [[3, 0, 4, 2, 4, 2, 1], 5],
        [[7, 4, 0, 9], 10],
        [[6, 9, 9], 0],
        [[0, 0, 0, 8], 0],
        [[8, 0, 8], 8],
        [[6], 0],
        [[], 0],
    ])('function accept arr: %s then return result: %s', (arr, res) => {
        expect(trappingWater(arr)).toBe(res);
    });
});
