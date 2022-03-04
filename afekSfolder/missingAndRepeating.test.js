const missingAndRepeating = require('./missingAndRepeating');
const bubbleSort = require('./bubbleSort');


test('find one missing number and one number that occurs twice', () =>{
  const arr = [1,3,3];
  const size = 3;
  const result = [3, 2];

  expect(missingAndRepeating(arr, size)).toEqual(result);
})