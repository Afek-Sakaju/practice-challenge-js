const { isPowerofTwo } = require('../power-of-2');

describe('power-of-2 tests', () => {
    describe('good cases', () => {
        test.each([[1], [4], [16], [32], [2], [128], [256]])(
            'function accept number:%s than return true',
            (number) => {
                expect(isPowerofTwo(number)).toBeTruthy();
            }
        );
    });
    describe('bad cases', () => {
        test.each([[98], [99], [0], [3], [33], [-9], [77], [67], [8001]])(
            'function accept number:%s than return false',
            (number) => {
                expect(isPowerofTwo(number)).toBeFalsy();
            }
        );
    });
});
