/**
 * function gets a non-negative integer number
 * the function returns true if the number is possible
 * result that is power of 2 by some number
 * 
 * @param {number} givenNum a non-negative number
 * @returns {boolean} result that returns false if the number is possibly
 *  result of 2 powered by some number
 */
function isPowerOf2(givenNum){
  let power = 0;
  let currentPowerResult = 1;// 2^0 equal 1
  let result = false;

  while(currentPowerResult <= givenNum){
    currentPowerResult = Math.pow(2, power);
    
    if(currentPowerResult === givenNum){
      result = true;
      return result;
    }
    else power++;
  }
  return result;
 }

 module.exports.isPowerOf2 = isPowerOf2;
