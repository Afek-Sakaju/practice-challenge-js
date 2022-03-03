/**
 * This function gets an array of numbers  
 * and finds its majority element
 * which is an element that appears
 * more than length/2 times in the array
 * 
 * @param {array} arr1 is array containing numbers
 * @param {number} length is the length of arr1
 * @returns {number} majorNum is the majority element in the array
 */

module.exports.majorityElement = function(arr1, length){
  const countingObj = {};
  let majorNum = -1;

  
  let minimumCounts = Math.ceil(length/2);

  for(const num of arr1){

    if(!Object.hasOwn(countingObj, num)) countingObj[num] = 0;

    countingObj[num]++;
  }

  for(const [key, value] of Object.entries(countingObj)){

    if(value >= minimumCounts) majorNum = +key
  }

  return majorNum;
}