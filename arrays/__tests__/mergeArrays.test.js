const {mergeArraysInPlace} = require('../mergeArrays');

describe('mergeArraysInPlace tests', () => {
  describe('good cases', () => {
    it.each([
      [[1,3,5,7],[0,2,6,8,9],[0,1,2,3,5,6,7,8,9]],
      [[2,5],[1,8],[1,2,5,8]],
      [[-9,8],[-5,2],[-9,-5,2,8]]
    ])('function gets arr1 %s and arr2 %s, return array %s',(arr1, arr2, expectedResult) => {
      expect(mergeArraysInPlace(arr1, arr2)).toEqual(expectedResult);
    })
  })

  describe('bad cases', () => {
    it.each([
      [[1,2,3,],[],[1,2,3]],
      [[],[2],[2]],
      [[],[],[]],
      [[1,5,99],[],[1,5,99]]
    ])('function gets arr1 %s and arr2 %s ,return array %s even if one of them empty',
    (arr1, arr2, expectedResult) => {
      expect(mergeArraysInPlace(arr1, arr2)).toEqual(expectedResult);
    })
  })
})