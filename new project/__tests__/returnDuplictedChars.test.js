const {returnDuplictedChars} = require('../returnDuplictedChars');

describe('returnDuplictedChars tests', () => {
  test.each([
    ["abbbcc", "bc"],
    ["rr", "r"],
    ["jhkk11", "k1"],
    ["abcc2", "c"],
    ["112233", "123"],
    ["gggsops", "gs"]
  ])('function accepts string: "%s", than returns the string: "%s"', (str, result) => {
    expect(returnDuplictedChars(str)).toBe(result);
  })

  test.each([
    ["abc"],
    ["a"],
    ["jklmnop"],
    [""],
    ["657"],
    ["noDups"]
  ])('function accepts string: "%s", and returns empty string', (str) => {
    expect(returnDuplictedChars(str)).toBeFalsy();
  })
})

