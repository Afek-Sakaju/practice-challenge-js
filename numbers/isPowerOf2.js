/**
 * function gets a non-negative integer number
 * the function returns true if the number is possible
 * result that is power of 2 by some number
 * 
 * @param {number} num1 a non-negative number
 * @returns {boolean} result that returns false if the number is possibly
 *  result of 2 powered by some number
 */
function isPowerOf2(num1){
  let power = 0;
  let result = false;
  const currentPowerResult = Math.pow(2, power);

  while(currentPowerResult <= num1){
    if (currentPowerResult === num1){
      result = true;
      return result;
    }
    else power++;
  }
  return result;
 }

 module.exports.isPowerOf2 = isPowerOf2;