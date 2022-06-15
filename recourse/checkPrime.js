/**
 * The function gets number and check if he is prime
 * number, if it is returns 1, if is not prime returns 0
 * 
 * @param {Number} givenNum number that given to the function
 * @returns {Number} returns 1 if the givenNum is prime number
 * otherwise return 0
 */
function checkPrime(givenNum){
  let i = 2;

  function remainderCheck(i){
    if(i === 10) return 1;

    else if(givenNum % i){
      return remainderCheck(i + 1);
    }
    else return 0;
  }
  return remainderCheck(i);
}
module.exports = checkPrime;


