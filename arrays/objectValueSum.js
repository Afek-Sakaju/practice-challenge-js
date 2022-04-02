/**
 * function accepts object and return all his values sum
 * 
 * @param {Object} obj is an object of values as numbers
 * @returns {Number} the sum of the object values param
 */
function objectValueSum(obj){
  const objSum = Object.values(obj).reduce((total, value) => total + value, 0);
  return objSum;
}
module.exports.objectValueSum = objectValueSum;