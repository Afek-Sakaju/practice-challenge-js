const missingAndRepeating = require('./missingAndRepeating');

test('find one missing number and one number that occurs twice', () =>{
  const arr = [1,3,3];
  const size = 3;
  const result = [3, 2];

  expect(missingAndRepeating(arr, size)).toEqual(result);
})

test('find missing number and repeating number from array of two duplicated nums', () =>{
  
  expect(missingAndRepeating([2,2],2)).toEqual([2, 1]);
})

test('if array empty return string insted of repeating number', () =>{
  
  expect(missingAndRepeating([],0)).toEqual(["no repeating num", 1]);
})