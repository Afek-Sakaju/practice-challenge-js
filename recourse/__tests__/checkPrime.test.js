const checkPrime = require('../checkPrime');

describe('checkPrime tests', () => {
  test('return 1 if it is prime', () => {
    expect(checkPrime(23)).toBeTruthy();
  })

  it('return 0 if it is not prime', () => {
    expect(checkPrime(20)).toBeFalsy();
  })
});