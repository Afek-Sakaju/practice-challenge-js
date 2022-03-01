const bubbleSort = require('./bubbleSort');

test('function return sorted array from unsorted array', () => {
  const arr1 = [4,9,33,3];

  expect(bubbleSort(arr1)).toEqual([3,4,9,33]);
  }
)

test('function returns error if array is empty', () => {
  const emptyArray = [];
  
  expect(bubbleSort(emptyArray)).toBe("error");
  }
)

test('return "invalid input" if the array dont have only integers', () => {

  expect(bubbleSort(['a',6,'b',7,'c',3])).toBe("invalid input");
  }
)
  
