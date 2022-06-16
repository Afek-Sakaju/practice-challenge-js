const { find3Numbers } = require('../triplet-sum-in-array')

describe('triplet-sum-in-array tests', () => {
    test.each([
        [[1, 4, 45, 6, 10, 8], 13],
        [[1, 2, 4, 3, 6], 10],
    ])('function accept array: %s, and x: %s than return true', (arr, x) => {
        expect(find3Numbers(arr, x)).toBeTruthy()
    })
    test.each([
        [[1, 2, 3, 4, 5], 100],
        [[1, 4, 3, 6], 50],
    ])('function accept array: %s, and x: %s than return false', (arr, x) => {
        expect(find3Numbers(arr, x)).toBeFalsy()
    })
})
