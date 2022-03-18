const biggestDivideNum = require('../googleQuestions');

describe("function 'biggestDivideNum' tests", () => {
  test("return biggest possible number to devide num1 and num2", () => {
    const functionCall = biggestDivideNum(6,9);
    const expectedResult = 3;
    expect(functionCall).toBe(expectedResult);
  }) 

  test("return the given numbers if they both equal", () => {
    const functionCall = biggestDivideNum(6,6);
    const expectedResult = 6;
    expect(functionCall).toBe(expectedResult);
  })

  test("return 0, if one of the number is 0", () => {
    const functionCall = biggestDivideNum(6,0);
    const expectedResult = 0;
    expect(functionCall).toBe(expectedResult);
  })
})
