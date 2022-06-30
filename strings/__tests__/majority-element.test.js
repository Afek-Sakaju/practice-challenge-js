const { majorityElement } = require('../majority-element');

describe('majority-element tests', () => {
    describe('good tests', () => {
        test.each([
            [[3, 1, 3, 3, 2], 3],
            [[1, 2, 3, 1, 1, 1], 1],
            [[0, 0, 0, 0, 1, 1], 0],
            [[1, 2, 3, 4, 9, 9, 9, 9, 9, 9], 9],
        ])('function accepts arr: %s and return: %s', (arr, expected) => {
            expect(majorityElement(arr)).toBe(expected);
        });
    });
    describe('bad tests', () => {
        test.each([
            [[3, 1, 3, 9, 2], -1],
            [[1, 2, 3], -1],
            [[0, 0, 0, 1, 1, 1], -1],
            [[1, 2, 3, 4, 10], -1],
            [[], -1],
        ])('find the majority element of arr %s is %s', (arr, expected) => {
            expect(majorityElement(arr)).toBe(expected);
        });
    });
});
