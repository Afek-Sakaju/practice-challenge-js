const {isCorrectParentheses} = require('../correctParentheses2');
describe('correctParentheses2 tests', () => {
  it.each([
    ['(()(()))()'],
    ['()'],
    ['']
  ])('expect str:, "%s" to return true', (str) => {
    expect(isCorrectParentheses(str)).toBeTruthy();
  })
  it.each([
    ['((())()()'],
    ['(()'],
    ['))(('],
    ['()((']
  ])('expect str: "%s", to return false', (str) => {
    expect(isCorrectParentheses(str)).toBeFalsy();
  })
})
