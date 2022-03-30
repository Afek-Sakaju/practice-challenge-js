const { subarraySum_ON } = require('../subarray-sum');

describe('subarraySum tests', () => {
    test.each([
        [ [1,2,3,7,5 ], 12, [2,4] ],
        [ [1,2,3,4,5,6,7,8,9,10 ], 15, [1,5] ],
        [ [4,3,5 ], 3, [2,2] ],
        [ [4,3,5 ], 5, [3,3] ],
        [ [4,3,5 ], 4, [1,1] ],
    ])('good cases - the subarraySum(%o) of sum %s = %o', (array, sum, expected) => {
        const result = subarraySum_ON(array, array.length, sum);
        expect(result).toEqual(expected);
    })

    test.each([
        [ [1, 2] , 1e6 ],  //  c < sum
        [ [4, 3, 5] , 2 ],  //  c > sum
    ])('bad cases - the subarraySum(%o) of sum %s = %s', (array, sum) => {
        const result = subarraySum_ON(array, array.length, sum);
        expect(result).toBe(-1);
    })
})