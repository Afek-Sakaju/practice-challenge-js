const { josephusProblem } = require('../josephus-problem');

describe('josephus-problem tests', () => {
    test.each([
        [3, 2, 3],
        [3, 6, 1],
        [3, 3, 1],
        [3, 7, 2],
        [5, 3, 4],
        [9, 5, 6],
        [9, 9, 1],
        [9, 9, 1],
        [1, 9, -1],
        [1, 1, -1],
    ])(
        'function accept params: (%s ,%s), than return result: %s',
        (n, k, res) => {
            expect(josephusProblem(n, k)).toBe(res);
        }
    );
});
