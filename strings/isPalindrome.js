
module.exports.isPalindrome = function (str) {
    for(let i = 0, j = str.length - 1; i < j; i++, j--) {
        if(str[i] !== str[j]) return false;
    }

    return true;
}

module.exports.isReversePalindrome = function (str) {
    const reverseStr = str.split('').reverse().join('');
    return str === reverseStr;
}

function getPalindromeSubstringByLen(char, index, arr, len) {
    return index < arr.length - len && char === arr[index + len]
        ? { startIndex: index, str: arr.slice(index, index + len + 1).join('') }
        : { startIndex: index, str: '' }
}

module.exports.isLongestPalindrome = function (str) {
    const threeChars = str
        .split('')
        .map((char, index, arr) => {
            return getPalindromeSubstringByLen(char, index, arr, 2);
        })
        .filter((item) => item.str)

    const pairChars = str
        .split('')
        .map((char, index, arr) => {
            return getPalindromeSubstringByLen(char, index, arr, 1);
        })
        .filter((item) => item.str)

    const longestPalindrome = [...threeChars, ...pairChars]
        .map(({startIndex, str}) => ({
            startIndex,
            palindrome: str,
            length: str.length
        }));

    [...threeChars, ...pairChars].forEach(({startIndex, str: miniPalindrome}) => {
        for(
            let i = startIndex, j = startIndex + miniPalindrome.length - 1;
            i >= 0 && j < str.length;
            i--, j++
        ){
            if(str[i] !== str[j] ){
                const palindrome = str.slice(i + 1, j);
                longestPalindrome.push({
                    startIndex: i + 1,
                    palindrome,
                    length: palindrome.length
                });
                break
            }
        }
    })

    /*
        longestPalindrome = [
            {startIndex: 1, palindrome: '...', length: 10},
            {startIndex: 3, palindrome: '...', length: 8},
            {startIndex: 4, palindrome: '...', length: 20},
            {startIndex: 2, palindrome: '...', length: 1},
        ]
        Math.max(...[10,8,20,1])
     */

    const maxLength = Math.max(...longestPalindrome.map(({length}) => length));
    const theLongestPalindrome = longestPalindrome.find(({length}) => length === maxLength);

    return theLongestPalindrome;
}