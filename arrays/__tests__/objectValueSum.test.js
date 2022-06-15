const {objectValueSum} = require('../objectValueSum');
describe('objectValueSum functions tests', () => {
  test.each([
    [{a:0,b:0,c:7}, 7],
    [{a:2,b:4,c:7}, 13],
    [{a:5,b:5,c:5}, 15],
    [{a:-2,b:-4,c:7}, 1],
    [{a:2}, 2],
    [{a:-2,b:-4,c:-7}, -13],
    [{}, 0]
  ])('for the object %s, return the sum %s',(obj, result) => {
    expect(objectValueSum(obj)).toBe(result);
  })
});