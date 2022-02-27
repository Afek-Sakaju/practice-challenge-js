const {countOccurrenceCharacters} = require('./countCharacters')
/**
 * check is two strings are anagram
 * @param STR1 = given variable that contains second string.
 * @param STR2 = given variable variable that contains first string.
 * @return boolean  variable that contains true if the two strings are anagram of each other, else returns false.
*/
function isAnagramStrings(STR1, STR2)
// The function check if two given strings are anagram
// of each other, and return true if they do,
// if they dont return false.
{
  if(!STR1.length || !STR2.length) {
    return "invalid input";
  }

  if(STR1.length !== STR2.length) {
    return false;
  }

  const STR1CharsObj = countOccurrenceCharacters(STR1);
  const STR2CharsObj = countOccurrenceCharacters(STR2);

  const sortedStr1keys = Object.keys(STR1CharsObj).sort();
  const sortedStr2keys = Object.keys(STR2CharsObj).sort();

  if(sortedStr1keys.length && sortedStr2keys.length){
    for(const i in sortedStr1keys){
      const c1 = sortedStr1keys[i];
      const c2 = sortedStr2keys[i];
      if(c1 !== c2) {
        return false;
      }
      else if(STR1CharsObj[c1] !== STR2CharsObj[c2]){
        return false;
      }
    }
    return true;
  }
  return false;
}

function isAnagramStrings2(str1, str2) {
  if(!str1.length || !str2.length){
    return 'invalid input';
  }
  str1 = str1.split('');
  str2 = str2.split('');

  let i = str2.length;
  while (i--){
    const [c] = str1.splice(i, 1);
    const indexInStr2 = str2.indexOf(c);
    if(indexInStr2 === -1){
      return false;
    }
    str2.splice(indexInStr2, 1);
  }

  return true;
}

module.exports.isAnagramStrings = isAnagramStrings2;
