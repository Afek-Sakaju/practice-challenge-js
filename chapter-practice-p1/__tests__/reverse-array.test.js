const { reverseArr } = require('../reverse-array');

describe('reverse-array tests', () => {
    test.each([
        [
            [-100, -13, 0, 50, 1, 2, 5, 3],
            [3, 5, 2, 1, 50, 0, -13, -100],
        ],
        [
            ['Hadriel', 'name is', 'my', 'Hi'],
            ['Hi', 'my', 'name is', 'Hadriel'],
        ],
        [
            [1, 2, 3, 4, 5, 6],
            [6, 5, 4, 3, 2, 1],
        ],
    ])('function reverse arr: %s, to arr: %s', (arr, res) => {
        expect(reverseArr(arr)).toEqual(res);
    });
});
