const { toggleAllBitsInRange } = require('../toggle-bits-range');

describe('toggle-bits-range tests', () => {
    test.each([
        [17, 2, 3, 23],
        [50, 1, 4, 44],
        [8, 1, 2, 14],
        [17, 1, 3, 31],
        [31, 1, 4, 16],
    ])('toggleAllBitsInRange(%s, %s, %s) return %s', (N, L, R, expected) => {
        expect(toggleAllBitsInRange(N, L, R)).toBe(expected);
    });
});
