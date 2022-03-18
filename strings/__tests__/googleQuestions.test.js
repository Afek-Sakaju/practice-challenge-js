const biggestDivideNum = require('../googleQuestions');
const smallestDividedNum = require('../googleQuestions');

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
describe("function 'smallestDividedNum' tests", () => {
  test("return smallest possible number divided by two given nums", () => {
    const functionCall = smallestDividedNum(6, 9);
    const expectedResult = 18;
    expect(functionCall).toBe(expectedResult);
  })
  
  test("return 'not found' in case that there is no possible number", () => {
    const functionCall = smallestDividedNum(690, 707);
    const expectedResult = "not found";
    expect(functionCall).toBe(expectedResult);
  })

  test("if one of the number is negative or 0 return alert", () => {
    const functionCall = smallestDividedNum(0, -9);
    const expectedResult = "please enter positive numbers";
    expect(functionCall).toBe(expectedResult);
  })
})
