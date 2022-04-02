//How do to check correct parentheses sentence

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

module.exports.isCorrectParentheses = isCorrectParentheses;