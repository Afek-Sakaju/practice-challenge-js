const { genIp } = require('../generate-ip');

describe('generate-ip tests', () => {
    test.each([
        ['1111', ['1.1.1.1']],
        ['11211', ['11.2.1.1', '1.12.1.1', '1.1.21.1', '1.1.2.11']],
    ])('function accepts string: %s, than return arr: %s', (str, res) => {
        expect(genIp(str)).toEqual(res);
    });
    test.each([['111'], ['888999888999'], ['669'], ['55'], ['1'], ['']])(
        'function accepts string: %s, than returns -1',
        (str) => {
            expect(genIp(str)).toBe(-1);
        }
    );
});
