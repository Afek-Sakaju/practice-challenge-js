const { objectValueSum } = require('../obj-values-sum');

describe('obj-values-sum tests', () => {
    test.each([
        [{ a: 0, b: 0, c: 7 }, 7],
        [{ a: 2, b: 4, c: 7 }, 13],
        [{ a: 5, b: 5, c: 5 }, 15],
        [{ a: -2, b: -4, c: 7 }, 1],
        [{ a: 2 }, 2],
        [{ a: -2, b: -4, c: -7 }, -13],
        [{}, 0],
    ])('for object %s, function returns sum %s', (obj, result) => {
        expect(objectValueSum(obj)).toBe(result);
    });
});
