const { setLodash } = require('../lodash-set');

describe('set-lodash tests', () => {
    test.each([
        [{ a: { c: 1 } }, 'a.c', '9', { a: { c: '9' } }],
        [{ a: { b: [1, 2, 3] } }, 'a.b', [0, 0, 0], { a: { b: [0, 0, 0] } }],
        [
            { user: { food: 'steak' } },
            'user.food',
            'butter',
            { user: { food: 'butter' } },
        ],
        [
            { user: { pc: 'desk-pc' } },
            'user.pc',
            'gaming',
            { user: { pc: 'gaming' } },
        ],
        [{}, 'a', 'NoMeaning', { a: 'NoMeaning' }],
        [{}, 'a.b.c', 700, { a: { b: { c: 700 } } }],
    ])(
        'function accept obj: %s, path: %s, val: %s, then return: %s',
        (obj, path, val, res) => {
            expect(setLodash(obj, path, val)).toEqual(res);
        }
    );
});
