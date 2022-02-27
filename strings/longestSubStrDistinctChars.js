/**
 * This function will accept a string 
 * and return the length of the longest substring in it 
 * which countains only distinct characters.
 * 
 * @param {string} string With chars to the function 
 * @return {number} longestLength From all the sub strings of distinct chars 
 * that the function took from the string
*/
module.exports.longestSubStrDistinctChars = function(string){ // O(N^2)
  const arrOfSubStrDistinct = []; // M substrings
  let currentSubStr = '';

  for(let i = 0; i < string.length; i++){ // O(N)
    if(currentSubStr.includes(string[i])){ // O(N-1)
      arrOfSubStrDistinct.push(currentSubStr);
      currentSubStr = string[i];
    }
    else {
      currentSubStr += string[i];

      if(i === string.length - 1) {
        arrOfSubStrDistinct.push(currentSubStr);
      }
    }
  }

  const longestLength = Math.max(...arrOfSubStrDistinct.map(str => str.length), 0); // O(M)

  return longestLength;
}

module.exports.longestSubStrDistinctCharsBetter = function(string){ // O(N)
  let currentSubStr = '';
  let letterObj = {};
  let maxLength = 0;

  for(const char of string){ // O(N)
    if(letterObj.hasOwnProperty(char)) { // O(1)
      letterObj = { [char]: true };
      currentSubStr = char;
    }
    else {
      letterObj[char] = true;
      currentSubStr += char;
    }

    maxLength = currentSubStr.length > maxLength
        ? currentSubStr.length
        : maxLength;
  }

  return maxLength;
}
