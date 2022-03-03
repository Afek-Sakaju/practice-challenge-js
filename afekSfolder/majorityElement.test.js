const {majorityElement} = require('./majorityElement');

test('find the majority element', () =>{
  arr = [3,1,3,3,2];
  length = 5;

  expect(majorityElement(arr, length)).toBe(3);
})

test('return -1 if there is no major element', () =>{
  arr = [1,2,3];
  length = 3;
  
  expect(majorityElement(arr, length)).toBe(-1);
})