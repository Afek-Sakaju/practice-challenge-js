const { trappingWater } = require('../trapping-water');

describe('trapping-water tests', () => {
    test.each([
        [[7, 4, 0, 9], 10],
        [[6, 9, 9], 0],
        [[3, 0, 0, 2, 0, 4], 10],
    ])('function accept arr: %s then return result: %s', (arr, res) => {
        expect(trappingWater(arr)).toBe(res);
    });
});
