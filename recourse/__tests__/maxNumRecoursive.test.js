const maxNumRecoursive = require('../maxNumRecoursive');

test('returns max number from given array', () => {
  expect(maxNumRecoursive([1,5,0,2,8,4])).toBe(8);
})