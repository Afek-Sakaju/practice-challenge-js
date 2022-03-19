const divisibleCheck = require('../divisibleCheck');

describe('function divisibleCheck tests', () => {
  test('numX divisible by numY return numX', () => {
    const functionCall = divisibleCheck(4, 2);
    const expectedResult = 4;
    expect(functionCall).toBe(expectedResult);
  })

  test('numX and numY equal, return numX', () => {
    const functionCall = divisibleCheck(23, 23);
    const expectedResult = 23;
    expect(functionCall).toBe(expectedResult);
  })

  test('numX not divisible by numY, return next higher number that can', () => {
    const functionCall = divisibleCheck(7, 3);
    const expectedResult = 9;
    expect(functionCall).toBe(expectedResult);
  })

  test('if one of the numbers is negative, return 0', () => {
    const functionCall = divisibleCheck(-8, 7);
    const expectedResult = 0;
    expect(functionCall).toBe(expectedResult);
  })
})