const {longestSubStrDistinctChars, longestSubStrDistinctCharsBetter} = require('../longestSubStrDistinctChars');

test.each([
  ['geeksforgeeks', 7, 'eksforg'],
  ['aaa', 1, 'a'],
  ['aabbaa', 2, 'ab'],
  ['', 0, ''],
  ['0123456789', 10, '0123456789'],
])('longestSubStrDistinctChars("%s") return %s [about: "%s"]', (str, expected) => {
  const result = longestSubStrDistinctCharsBetter(str);
  expect(result).toBe(expected);
})

