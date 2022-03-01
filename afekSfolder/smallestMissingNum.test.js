const {smallestMissingNum} = ('./require');

test.each([
  [[1,2,3,4,5],6]
  [[0,-10,1,3,-20],2]
])('smallestMissingNum return expected num',
    (arr, expected) => {
  expect(smallestMissingNum(arr)).toBe(expected);
})
