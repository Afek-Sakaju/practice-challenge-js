const { isPoweredBy2 } = require('../power-of-2');

describe('power-of-2 tests', () => {
    describe('good cases', () => {
        test.each([[1], [4], [16], [32], [2]])(
            'return true if %s obtainable by power of 2 by some number',
            (number) => {
                expect(isPoweredBy2(number)).toBeTruthy();
            }
        );
    });
    describe('bad cases', () => {
        test.each([[98], [99], [0], [3], [33], [-9]])(
            "return false if %s isn't obtainable by power of 2 by some number",
            (number) => {
                expect(isPoweredBy2(number)).toBeFalsy();
            }
        );
    });
});
