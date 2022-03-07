const mergeArrays = require('../mergeArrays');

test('sorting arrays in place without extra space', () => {
  const arr1 = [1, 3, 5, 7];
  const arr2 = [0, 2, 6, 8, 9];
  const expectedArr1 = [0, 1, 2, 3];
  const expectedArr2 = [5, 6, 7, 8, 9];
  expect(mergeArrays(arr1, arr2)).toEqual(expectedArr1, expectedArr2);
})