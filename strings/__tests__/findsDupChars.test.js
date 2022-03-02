const {findsDupChars,findNotRepeatedFirstChar} = require('../findsDupChars');

test("find the dup chars", () => {
  expect(findsDupChars("aabbccc")).toEqual(["a","b","c"]);
})

test("find the first non repeated char", () => {
  expect(findNotRepeatedFirstChar("atabbcccd")).toBe("t");
})

test("find the first non repeated char for empty result", () => {
  expect(findNotRepeatedFirstChar("aabbccc")).toBe("");
})