const {toggleAllBitsInRange, bin2dec, dec2Bin} = require('../toggleBitsRange');

describe("toggleBitsRange tests", () => {
    test.each([
        [17, '10001'],
        [83, '1010011'],
        [0, '0'],
        [1, '1'],
        [2, '10'],
        [-10, '-1010']
    ])("%s => %s", (dec, bin) => {
        expect(dec2Bin(dec)).toBe(bin)
    })

    test.each([
        [17, '10001'],
        [83, '1010011'],
        [0, '0'],
        [1, '1'],
        [2, '10']
    ])("%s <= %s", (dec, bin) => {
        expect(bin2dec(bin)).toBe(dec)
    })

    test.each([
        [17, 2, 3, 29],
        [7, 2, 2, 5],
        [7, 10, 15, 7],
        [17, 3, 2, 17],
        [-10, 1, 2, 0],
    ])("toggleAllBitsInRange(%s, %s, %s) return %s", (N, L, R, expected) => {
        expect(toggleAllBitsInRange(N, L, R)).toBe(expected)
    })
})
