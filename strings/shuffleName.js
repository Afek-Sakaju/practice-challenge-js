/**
 * Function that accepts a string
 * (of a person's first and last name)
 * and returns a string with the first and last name swapped.
 * 
 * @param {String} fullName is a string that contains
 * the first and last name of person.
 * @returns {String} swappedFullName is a string of the swapped full name 
 * from the fullName string the function accepted (last name swapped with first name).
 */

function shuffleName(fullName){
  for(let i = 0; i < fullName.length; i++){
    if (fullName[i] === ' '){
      let str2 = fullName.slice(i + 1);
      let str1 = fullName.slice(0,i);
      fullName = str2 + ' ' + str1;
      break;
    }
  }
  return fullName;
}

console.log(shuffleName('hello friend'));
module.exports = shuffleName;
