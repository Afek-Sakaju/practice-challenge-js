const allPositive = require('../allPositive');

describe("returns input 1 if all numbers are positive, or 0 if all numbers are negative", () => {
  it('returns 1 if all numbers are positive', () => {
    expect(allPositive([1,2,4,6,8])).toBe(1);
  })

  it('return 0 if all numbers are negative', () => {
    expect(allPositive([2,-6,1,8])).toBe(0);
  })
});
