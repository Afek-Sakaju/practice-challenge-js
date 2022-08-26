const { genIp } = require('../generate-ip');

describe('generate-ip tests', () => {
    test.each([
        ['1111', ['1.1.1.1']],
        ['11211', ['11.2.1.1', '1.12.1.1', '1.1.21.1', '1.1.2.11']],
    ])('function accepts string: %s, than return arr: %s', (str, res) => {
        expect(genIp(str)).toEqual(res);
    });
});
