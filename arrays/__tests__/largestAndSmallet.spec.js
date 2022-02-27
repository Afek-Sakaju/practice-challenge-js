const { getMaxAndMin } = require('../largestAndSmallest');

describe.skip("largestAndSmallest tests - for a bad cases", () => {
    test("largestAndSmallest invalid number list",() => {
        expect(true).toBeFalsy();
        const list = ['Hadriel', 'Test'];
        try{
            getMaxAndMin(list);
            expect(true).toBeFalsy();
        }catch (error) {
            expect(error).toBe('Invalid Param')
        }
    })

    test("largestAndSmallest invalid param null",() => {
        const list = null;
        try{
            getMaxAndMin(list);
            expect(true).toBeFalsy();
        }catch (error) {
            expect(error).toBe('Invalid Param')
        }
    })
})

describe("largestAndSmallest tests - for a good cases", () => {
    it("largestAndSmallest check good case",() => {
        const list = [3, 5, 2, 1, 50, 0, -13, -100];
        const result = getMaxAndMin(list);
        expect(result).toEqual({
            min: -100,
            max: 50
        });
    })

    test("largestAndSmallest empty list",() => {
        const list = [];
        const {min, max} = getMaxAndMin(list);
        expect(min).toBe(undefined);
        expect(max).toBe(undefined);
    })

    test("largestAndSmallest list with size 1",() => {
        const list = [26];
        const {min, max} = getMaxAndMin(list);
        expect(min).toBe(26);
        expect(max).toBe(26);
    })

});

