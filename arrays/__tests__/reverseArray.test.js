const { reverseArrayInPlace } = require('../reverseArray');

describe("reverseArray tests", () => {
    it("reverseArrayInPlace of numbers",() => {
        const list = [3, 5, 2, 1, 50, 0, -13, -100];
        reverseArrayInPlace(list);
        expect(list).toEqual([-100, -13, 0, 50, 1, 2, 5, 3]);
    })

    it("reverseArrayInPlace of strings",() => {
        const list = ['Hi', 'my', 'name is', 'Hadriel'];
        reverseArrayInPlace(list);
        expect(list).toEqual(['Hadriel', 'name is', 'my', 'Hi']);
    })
});

