/**
 * the function gets array of numbers and if all 
 * the numbers are positive returns 1, else returns 0
 * 
 * @param {Array} arr1 
 * @return {Number} returns 1 if all the array numbers
 * are positive, else returns 0
 */

function allPositive(arr1){
  let i = 0;

  function positivity(currentNum) {
    if(i === arr1.length) {
      return 1; 
    }
    else if(currentNum < 0) {
      return 0;
    }
    else {
      i++;
      currentNum = arr1[i];
      return positivity(currentNum);
    } 
  }

  return positivity(arr1[i]);
}

module.exports = allPositive;