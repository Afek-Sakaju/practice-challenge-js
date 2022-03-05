const {majorityElement} = require('./majorityElement');

test('find the majority element', () =>{
  const arr = [3,1,3,3,2];
  const length = 5;

  expect(majorityElement(arr, length)).toBe(3);
})

test('return -1 if there is no major element', () =>{
  const arr = [1,2,3];
  const length = 3;
  
  expect(majorityElement(arr, length)).toBe(-1);
})