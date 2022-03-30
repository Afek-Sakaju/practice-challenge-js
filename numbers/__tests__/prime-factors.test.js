const { getPrimeFactors, isPrime } = require('../prime-factors');

describe('getPrimeFactors tests', () => {
    test.each([2,3,5,7,11,13])('isPrime %s', (p) => {
        expect(isPrime(p)).toBeTruthy();
    });
    test.each([4,6,8,9,10,12])('is NOT Prime %s', (p) => {
        expect(isPrime(p)).toBeFalsy();
    });

    test.each([
       [40, [2,2,2,5]],
       [20, [2,2,5]],
       [28, [2,2,7]],
       [60, [2,2,3,5]],
       [1155, [3,5,7,11]],
    ])('the prime factors of %s are %o', (num, expected) => {
       expect(getPrimeFactors(num)).toEqual(expected);
    })
});