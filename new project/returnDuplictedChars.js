//Qeustion 7: "How do you print duplicate characters from a string?"
//(i changed the question from print dups to return dups to test the function)
/**
 * function returnDuplictedChars gets string
 * and returns all the duplicated
 * characters in it
 * 
 * @param {String} str is string given to the function 
 * @returns {String} dupChars that contains all the duplicated 
 * chars from the given string
 */
function returnDuplictedChars(str){
  const obj = {};
  let dupChars = "";
  for(const char of str){

    if(!obj.hasOwnProperty(char)){
      obj[char] = false;
    }
    else if(obj[char] === false){
      dupChars += char;
      obj[char] = true
    }
  }
  return dupChars;
}
module.exports.returnDuplictedChars = returnDuplictedChars;
