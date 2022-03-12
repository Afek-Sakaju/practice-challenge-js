const {towerMovementInPlace} = require('../metrix-boolean');

describe('metrix-boolean tests', () => {
    test('towerMovement example 1', () => {
        const matrix = [
            [1,0],
            [0,0],
        ];
        const result = towerMovementInPlace(matrix);
        expect(result).toEqual([
            [1,1],
            [1,0]
        ])
    })

    test('towerMovement example 2', () => {
        const matrix = [
            [0, 0, 1],
            [0, 0, 1],
            [0, 0, 1],
            [0, 0, 0],
        ];
        const result = towerMovementInPlace(matrix);
        expect(result).toEqual([
            [1, 1, 1],
            [1, 1, 1],
            [1, 1, 1],
            [0, 0, 1],
        ])
    })
})