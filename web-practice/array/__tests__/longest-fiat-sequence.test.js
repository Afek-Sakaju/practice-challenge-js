import { longestFlatSequence } from '../longest-fiat-sequence';

describe('longest-flat-sequence tests', () => {
    test.each([
        [[4, 5, 6, 5, 4, 3], 3],
        [[4, 4, 4, 4, 4], 5],
        [[0, 1, 0, 5], 3],
        [[9, 8, 9, 6, 6, 6, 6], 4],
        [[5], 1],
        [[], 0],
    ])('function accepts arr:"%s", then return:"%s"', (arr, res) => {
        expect(longestFlatSequence(arr)).toBe(res);
    });
});
