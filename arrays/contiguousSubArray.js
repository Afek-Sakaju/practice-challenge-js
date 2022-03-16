/**
 * function accepts an array of integers
 * and finds the contiguous sub array(containing at least one number)
 * which has the maximum sum and the function returns its sum.
 *
 * @param {Array} arr1 is array of integers given to the function
 * @returns {Number} number of the biggest max sum
 * from all the sub arrays of arr1
 */

function contiguousSubArray(arr1){
  let maxSum;
  const arr2 = [];
  for(let i = 0, j = i + 1; i < arr1.length; i++){
    
    if(sum1 > sum2){
      maxSum = sum1;
    }
    
  }

}
module.exports = contiguousSubArray;
