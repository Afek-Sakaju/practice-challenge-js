const isPowerOf2 = require('./isPowerOf2');

test('check if num1 can be expressed as 2 powered by some number', () =>{

  expect(isPowerOf2(1)).toBe(true);
})

test('check if num1 cant be expressed as 2 powered by some number', () =>{

  expect(isPowerOf2(98)).toBe(false);
})