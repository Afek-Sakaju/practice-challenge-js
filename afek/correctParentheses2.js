//How do to check correct parentheses sentence
module.exports.isCorrectParentheses = isCorrectParentheses;
function isCorrectParentheses(str){
  let openCounter = 0;

  for(const char of str){
    switch(char){
      case '(':
        openCounter++;
        break;

      case ')':
        openCounter--;
        if(openCounter < 0){
          return false;
        }
        break;

      default: 
        console.log('unknown char', char);
    }
  }

  return openCounter === 0;
}

module.exports.isCorrectParenthesesRec = isCorrectParenthesesRec;
function isCorrectParenthesesRec(str, openCounter = 0){
  if(!str){
    return openCounter === 0;
  }

  if(openCounter < 0){
    return false;
  }

  const char = str[0];
  const restStr = str.substring(1);

  if(char === '(') openCounter++;
  else if(char === ')') openCounter--;

  return isCorrectParenthesesRec(restStr, openCounter);
}
