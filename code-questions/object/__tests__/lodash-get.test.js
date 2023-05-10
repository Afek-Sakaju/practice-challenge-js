const { getLodash } = require('../lodash-get');

describe('get-lodash tests', () => {
    test.each([
        [{ a: { c: 8 } }, 'a.c', 'NoMeaning', 8],
        [{ r: { g: 1 } }, 'r.g.h', 'NoMeaning', 'NoMeaning'],
        [{ user: { food: 'steak' } }, 'user.steak.2', '', ''],
        [
            { pc: { gpu: { count: 2, brend: 'afeksGpu', gb: 2 } } },
            'pc.gpu',
            'NoMeaning',
            { count: 2, brend: 'afeksGpu', gb: 2 },
        ],
        [{}, 'a', 'NoMeaning', 'NoMeaning'],
        [{}, '', 'def', 'def'],
    ])(
        'function accept obj: %s, path: %s, defaultValue: %s, then return: %s',
        (obj, path, def, res) => {
            expect(getLodash(obj, path, def)).toEqual(res);
        }
    );
});
