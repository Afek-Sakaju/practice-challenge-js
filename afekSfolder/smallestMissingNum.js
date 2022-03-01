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
  
  const missingPossibilites = {};
  
  for(let i = 0; i < arr.length; i++){
    if (arr[i] > 0){
      const thisOne = [];

      missingPossibilites[JSON.stringify(arr[i])] = JSON.stringify(arr[i] + 1);
    }
  }
  const objLength = Object.keys(missingPossibilites).length;
  
  const minimum = Math.min(parseInt(Object.keys(missingPossibilites)));
  const maximum = Math.max(parseInt(Object.keys(missingPossibilites)));

  /*for(let i = 0; i < objLength; i++){
    if()
  }*/
  console.log(missingPossibilites,maximum,minimum);
  
}
console.log(this.smallestMissingNum([8,10,5]));