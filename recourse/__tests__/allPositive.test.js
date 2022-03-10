const allPositive = require('../allPositive');

test('returns 1 if all the array numbers are positive', () => {
  expect(allPositive([1,2,4,6,8])).toBe(1);
})
