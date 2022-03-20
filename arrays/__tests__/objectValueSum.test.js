const objectValueSum = require('../objectValueSum');

describe('objectValueSum functions testing', () => {
  test('return sum of objects value', () => {
    const functionCall = objectValueSum({a:1, b:2, c:3});
    const expectedResult = 6;
    expect(functionCall).toBe(expectedResult);
  })
});