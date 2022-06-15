/**
 * function gets array of positive numbers
 * which contains numbers that repeating twice
 * and one number that is existing once in the array
 * 
 * @param {Array} arr is an given array of numbers 
 * @param {number} size is the size of the given array
 * @returns {number} singleNum will be the single number that 
 *  occurs once in all the given array
 */
module.exports.partyOfCouple = function(arr) {
  const countObject = {};
  let singleNum = undefined;

  for(const num of arr){
    if(countObject.hasOwnProperty(num)){
      countObject[num] = true;
    }
    else countObject[num] = false;
  }

  for(let [key, value] of Object.entries(countObject)) {
    if(!value){
      singleNum = +key;
      break;
    }
  }
  return singleNum;
}
