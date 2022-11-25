const { game_with_number } = require('../game-with-nos');

describe('game-with-nos tests', () => {
    test.each([
        [
            [5, 9, 7, 6],
            [12, 14, 1, 6],
        ],
        [
            [10, 11, 1, 2, 3],
            [1, 10, 3, 1, 3],
        ],
    ])('function accepts arr: %s than returns arr: %s', (arr, res) => {
        expect(game_with_number(arr)).toEqual(res);
    });
});
