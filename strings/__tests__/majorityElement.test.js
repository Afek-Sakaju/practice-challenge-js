const { majorityElement } = require('../majorityElement');

describe('majorityElement tests', () => {
  test.each([
      [ [3,1,3,3,2], 3 ],
      [ [1,2,3], -1 ],
      [ [0,0,0,1,1,1], -1 ]
  ])('find the majority element of arr %s is %s', (arr, expected) => {
    expect(majorityElement(arr)).toBe(expected);
  })
})