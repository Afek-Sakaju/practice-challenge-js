const { setLodash } = require('../lodash-set');

describe('set-lodash tests', () => {
    test.each([
        [{ a: { c: 1 } }, 'a.c', '9', { a: { c: '9' } }],
        [
            { user: { name: "afek's pc" } },
            'user.type',
            'gaming',
            { user: { name: "afek's pc", type: 'gaming' } },
        ],
        [{}, 'a.b.c', 700, { a: { b: { c: 700 } } }],
        [{}, '', 'NoMeaning', { '': 'NoMeaning' }],
    ])(
        'function accept obj: %s, path: %s, val: %s, then return: %s',
        (obj, path, val, res) => {
            expect(setLodash(obj, path, val)).toEqual(res);
        }
    );
});
