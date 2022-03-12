const {missingAndRepeatingOptimal} = require('./missingAndRepeating');

test('find one missing number and one number that occurs twice 2', () =>{
  const arr = [5, 3, 3, 4, 1];
  const result = [3, 2];

  expect(missingAndRepeatingOptimal(arr)).toEqual(result);
})

test('find one missing number and one number that occurs twice', () =>{
  const arr = [3,3, 1];
  const result = [3, 2];

  expect(missingAndRepeatingOptimal(arr)).toEqual(result);
})

test('find missing number and repeating number from array of two duplicated nums', () =>{
  
  expect(missingAndRepeatingOptimal([2,2],2)).toEqual([2, 1]);
})

test('if array empty return string insted of repeating number', () =>{
  
  expect(missingAndRepeatingOptimal([],0)).toEqual(["no repeating num", 1]);
})