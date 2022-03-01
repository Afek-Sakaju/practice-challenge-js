const bubbleSort = require('./bubbleSort');
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
  
  let newArr = [];
  let missingNum;

  for(number of arr){

    if(number > 0) newArr.push(number);
  }
  newArr = bubbleSort(newArr);

  console.log(newArr);

  const length = newArr.length;

  if(newArr[0] === 1){

    for(let i = 0; i < length; i++){
      let nextNumber = newArr[i + 1]
      let expectedNext = newArr[i] + 1;

      if (!(nextNumber === expectedNext)){
        missingNum = expectedNext;
        break;
      }
      else if(i === length - 1) missingNum = expectedNext; 
    }
  }
  else missingNum = 1;

  return missingNum;
}
console.log(this.smallestMissingNum([1,2,3,10]));