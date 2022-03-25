const {isPowerOf2} = require('../isPowerOf2');

describe('isPowerOf2 tests', () => {
  describe('good cases', () => {
    it.each([
      [1],
      [4]
    ])('return true if %s obtainable by power of 2 by some number',(num) => {
      expect(isPowerOf2(num)).toBeTruthy()
    })
  });
  
  describe('bad cases', () => {
    it.each([
      [98],
      [99]
    ])("return false if %s isn't obtainable by power of 2 by some number",(num) => {
      expect(isPowerOf2(num)).toBeFalsy()
    })
  })
});
