/**
 * This function gets an array of numbers  
 * and finds its majority element
 * which is an element that appears
 * more than length/2 times in the array
 * 
 * @param {array} numbers is array containing numbers
 * @returns {number} majorNum is the majority element in the array
 */

module.exports.majorityElement = function(numbers) {
  const minimumCounts = Math.floor(numbers.length/2);
  const countingObj = {};
  let majorNum = -1;

  for(const num of numbers) {
    if(!countingObj.hasOwnProperty(num)) {
      countingObj[num] = 0;
    }
    countingObj[num]++;
  }
  
  for(const [key, value] of Object.entries(countingObj)) {
    if(value > minimumCounts) {
      majorNum = +key
      break;
    }
  }

  return majorNum;
}