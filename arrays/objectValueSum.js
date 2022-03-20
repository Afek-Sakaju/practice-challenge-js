/**
 * function accepts object and return all his values sum
 * 
 * @param {Object} obj1 is an object given to the function
 * @returns {Number} number of the sum containing all the 
 * values of obj 1
 */
function objectValueSum(obj1){
  let sumOfObj1 = 0;
  for(let [key, value] of Object.entries(obj1)){
    sumOfObj1 += value;
  }
  return sumOfObj1;
}
module.exports = objectValueSum;