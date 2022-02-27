

module.exports.countOccurrenceCharacters = function (str) {
    return str
        .split('')
        .reduce(
            (obj, c) => ({ ...obj, [c]: (obj[c] || 0) + 1 }),
            {}
        );
}

module.exports.countVowelsAndConsonantsCharacters = function (str) {
    const result = { vowel: 0, consonants: 0, special: 0};
    const VOWEL = 'aeuio';
    const ABC = /[a-z|A-Z]/;

    for(const c of str.toLowerCase()){
        if(VOWEL.includes(c)) result.vowel++;
        else if(ABC.test(c)) result.consonants++;
        else result.special++;
    }

    return result;
}