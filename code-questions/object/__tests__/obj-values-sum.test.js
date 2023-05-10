const { objectValueSum } = require('../obj-values-sum');

describe('obj-values-sum tests', () => {
    test.each([
        [{ a: 2, b: 4, c: 7 }, 13],
        [{ a: -2, b: -4 }, -6],
        [{ 2: 2 }, 2],
        [{}, 0],
    ])('for object %s, function returns sum %s', (obj, result) => {
        expect(objectValueSum(obj)).toBe(result);
    });
});
