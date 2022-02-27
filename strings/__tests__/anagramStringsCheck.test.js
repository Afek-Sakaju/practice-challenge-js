const {isAnagramStrings} = require('../anagramStringsCheck');

describe('anagramStringsCheck tests', () => {

    it('hadriel test', () => {
        const STR1 = "ho";
        const STR2 = "hp";
        const result = isAnagramStrings(STR1, STR2);
        expect(result).toBeFalsy()
    })

    it('a good case of anagram strings', () => {
      const STR1 = "hey";
      const STR2 = "yeh";
      const result = isAnagramStrings(STR1, STR2);
      expect(result).toBeTruthy()
    })

    it.each([
        ["", "hey"],
        ["hey", ""],
        ["", ""]
    ])(`anagramStringsCheck("%s", "%s") will return "invalid input"`, (STR1, STR2) => {
      expect(
          isAnagramStrings(STR1, STR2)
      ).toBe("invalid input")
    }
  )
})
