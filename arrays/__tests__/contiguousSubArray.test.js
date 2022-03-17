const contiguousSubArray = require('../contiguousSubArray');

describe('return max sum from all sub-arrays', () => {
  test('return max sum if the max sum is equal to arr1', () => {
    const contiguousFunction = contiguousSubArray([1,2,3,-2,5]);
    const result = 9;
    expect(contiguousFunction).toBe(result);
  })

  test('return only 1 number from array of negative integers', () => {
    const contiguousFunction = contiguousSubArray([-1,-2,-3,-4]);
    const result = -1;
    expect(contiguousFunction).toBe(result);
  })

  test('classic case of expected max sum to be returned', () => {
    const contiguousFunction = contiguousSubArray([1,2,-6,1,8]);
    const result = 3;
    expect(contiguousFunction).toBe(result);
  })
})

