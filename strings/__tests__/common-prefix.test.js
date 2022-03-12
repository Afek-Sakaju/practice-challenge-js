const { commonPrefix } = require('../common-prefix');

describe('common-prefix tests', () => {
    test('commonPrefix on non common string', () => {
        const result = commonPrefix(['hello', 'world']);
        expect(result).toBe('-1');
    })
    test('commonPrefix on common string \"gee\"', () => {
        const result = commonPrefix([
            'geeksforgeeks',
            'geeks',
            'geek',
            'geezer'
        ]);
        expect(result).toBe('gee');
    })

    test('commonPrefix on common string \"gee\" with min str first', () => {
        const result = commonPrefix([
            'gee',
            'geeksforgeeks',
            'geeks',
            'geezer'
        ]);
        expect(result).toBe('gee');
    })
})