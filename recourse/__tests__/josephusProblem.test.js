const josephusProblem = require('../josephusProblem');

describe('return the safe place in josephus problem', () => {
  test('the killing place is lower than the people amount', () => {
    const josephusLowerKill = josephusProblem(3, 2); //(personAmount, killNumber)
    const result = 3;
    expect(josephusLowerKill).toBe(result);
  })

  test('the killing place higher than the people amount', () => {
    const josephusHigherKill = josephusProblem(3, 4); //(personAmount, killNumber)
    const result = 2;
    expect(josephusHigherKill).toBe(result);
  })
});