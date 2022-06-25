// Q5: "How do you count a number of vowels and consonants in a given string?"

module.exports.vowelsConsonantsCount = function (str) {
    const obj = { vowel: 0, consonants: 0, special: 0 };
    const VOWEL = 'aeuio';
    const ABC = /[a-z|A-Z]/;

    for (const char of str.toLowerCase()) {
        if (VOWEL.includes(char)) obj.vowel++;
        else if (ABC.test(char)) obj.consonants++;
        else obj.special++;
    }

    return obj;
};
