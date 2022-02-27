const mergeWithoutExtraSpace = require('../mergeWithoutExtraSpace')

test('merge with the expacted lenght and no extra space', () => {
  const arr1 = [0,1,1,3,3,6,8];
  const arr2 = [1,4,6,7,7];
  const result = mergeWithoutExtraSpace(arr1, arr2);
  expect(result).toEqual([0,1,1,1,3,3,4,6,6,7,7,8]);
})

test('merge with the empty arrays', () => {
  {
    const arr1 = [];
    const arr2 = [1,4,6,7,7];
    const result = mergeWithoutExtraSpace(arr1, arr2);
    expect(result).toEqual([1,4,6,7,7]);
  }
  {
    const arr1 = [0,1,1,3,3,6,8];
    const arr2 = [];
    const result = mergeWithoutExtraSpace(arr1, arr2);
    expect(result).toEqual([0,1,1,3,3,6,8]);
  }
  {
    const arr1 = [];
    const arr2 = [];
    const result = mergeWithoutExtraSpace(arr1, arr2);
    expect(result).toEqual([]);
  }
})
