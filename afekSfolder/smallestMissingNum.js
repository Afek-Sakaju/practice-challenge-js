/**
 * This function gets an array of numbers and returns
 * the smallest positive missing number in the array
 * 
 * @param {array} array Of numbers that the function gets 
 * @returns {number} missingNum which contain the positive missing number in the array
 */

module.exports.smallestMissingNum = function(arr){
  //You are given an array arr[] of N integers including 0.
  // The task is to find the smallest positive number missing from the array.
  
  const MissingPossibilites = {};
  length = arr.length;
  for(let i = 0, i < length; i++){
    MissingPossibilites.arr[i] = 0;
  }

  console.log(MissingPossibilites);
}
console.log(this.smallestMissingNum([-8,-10,-5]));