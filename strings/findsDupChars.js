module.exports.findsDupChars = function(str){
  const charsObj = {};
  const resultDups = [];

  for(const char of str){//o(n)
    if (charsObj.hasOwnProperty(char)){//o(1)
      charsObj[char] = true;
    }
    else{
      charsObj[char] = false;
    }
  }

  for(const [char, isDup] of Object.entries(charsObj)){//o(m)
    if(isDup) resultDups.push(char);
  }

  return resultDups;
}

module.exports.findNotRepeatedFirstChar = function(str){
  const charsObj = {};
  const resultDups = [];

  for(const index in str){
    const char = str[index];
    if (charsObj.hasOwnProperty(char)){//o(1)
      charsObj[char] = true;
    }
    else{
      charsObj[char] = index;
    }
  }

  let minIndex = str.length;

  for(const [char, charIndex] of Object.entries(charsObj)){//o(m)
    if('0123456789'.includes(charIndex)) {
      if(+charIndex < minIndex) {
        minIndex = +charIndex;
      }
    }
  }

  return str[minIndex]||"";
}
