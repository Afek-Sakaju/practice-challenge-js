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
  let maxSum = -1000000;
  let currentSum = 0;

  for(let i = 0; i < arr1.length; i++){
    currentSum += arr1[i];
    if(currentSum > maxSum) maxSum = currentSum;
    if(currentSum < 0) currentSum = 0;
  }
  return maxSum;
}
module.exports = contiguousSubArray;

