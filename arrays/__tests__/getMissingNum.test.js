const {getMissingNum} = require('../missingNum')

test('getMissingNum check a normal input', () => {
    const list = [1,2,8,5,6,7,3];
    const result = getMissingNum(list)
    expect(result).toBe(4);
})