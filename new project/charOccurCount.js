/*Q4:How do you count the occurrence of a given character in a string?
The function accepts string and 
specifiec char, than returns how many 
times the char occurs in the string.
*/
module.exports.charOccurCount = charOccurCount;
function charOccurCount(str, char){
  let charOccur = 0;
  for(const c of str){
    if(c === char){
      charOccur++;
    }
  }
  return charOccur;
}
