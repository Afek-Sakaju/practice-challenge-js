/**
 * function "divisibleCheck" accepts two numbers , numX and numY
 * if numX is divisible by numY return numX if not
 * return the next higher natural number that is divisible by numY
 * 
 * @param {Number} numX number given to the function
 * @param {Number} numY number given to the function
 * @returns {Number} number that is divisible by numY, if numX is
 * divisible by him so numX will return, if not ,return next highet number
 * that is divisible by numY
 */
function divisibleCheck(numX, numY){
  if(numX <= 0 || numY <= 0) return 0;
  let counter100 = 100;//just to make sure it will loop max 100 times
  while(counter100--){
    if(numX % numY === 0) return numX;
    else numX++;
  }
}

module.exports = divisibleCheck;