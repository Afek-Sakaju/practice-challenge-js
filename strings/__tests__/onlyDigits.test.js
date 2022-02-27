const {isOnlyDigit} = require('../onlyDigits');

describe("isOnlyDigit tests", () => {
    test.each([
        ['1234'],
        ['0'],
        [''],
        ['12365448401324904013198']
    ])("isOnlyDigit return true for '%s'", (str) => {
        expect(isOnlyDigit(str)).toBeTruthy()
    })

    test.each([
        ['123O4'],
        ['a'],
        ['#%'],
        [undefined],
        [null],
        [[]],
        [{}],
        [false]
    ])("isOnlyDigit return false for '%s'", (str) => {
        expect(isOnlyDigit(str)).toBeFalsy()
    })
})
