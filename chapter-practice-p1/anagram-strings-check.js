// Q15: "How do you check if two strings are anagrams of each other?"

module.exports.anagramCheck = function (str1, str2) {
    if (str1.length !== str2.length) return false;

    for (let i = 0, j = str2.length - 1; i < str1.length && j >= 0; i++, j--) {
        if (str1[i] !== str2[j]) return false;
    }

    return true;
};
