const josephusProblem = require('../josephusProblem');

describe('return the safe place in josephus problem', () => {
  test('the killing place is lower than the people amount', () => {
    const josephusLowerKill = josephusProblem(3, 2); //(personAmount, killNumber)
    const result = 3;
    expect(josephusLowerKill).toBe(result);
  })

  test('the killing place higher than the people amount', () => {
    const josephusHigherKill = josephusProblem(3, 6); //(personAmount, killNumber)
    const result = 1;
    expect(josephusHigherKill).toBe(result);
  })

  test('the killing place is the pople amount', () => {
    const josephusHigherKill = josephusProblem(3, 3); //(personAmount, killNumber)
    const result = 1;
    expect(josephusHigherKill).toBe(result);
  })

  test('the killing place higher than the people amount', () => {
    const josephusHigherKill = josephusProblem(3, 7); //(personAmount, killNumber)
    const result = 2;
    expect(josephusHigherKill).toBe(result);
  })
});