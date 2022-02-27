const {reverseWords} = require('../reverseWords');

describe('reverseWords tests', () => {
    it('reverseWords from sentence test', () => {
        const str = "J u s t 👍 T h a t !"; // 20
        const result = reverseWords(str);
        expect(result).toBe("That! 👍 Just");
    })
})
