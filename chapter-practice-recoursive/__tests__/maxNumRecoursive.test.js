const {maxNumRecoursive} = require('../maxNumRecoursive');

describe('maxNumRecoursive tests', () => {
  test.each([
    [[1,5,0,2,8,4], 8],
    [[1,2,6], 6],
    [[7,0,8,22,-2], 22],
    [[-9,-8,-7,0], 0]
  ])("if the array is %s, return %s", (array, maxNum) => {
    expect(maxNumRecoursive(array)).toBe(maxNum);
  })
})