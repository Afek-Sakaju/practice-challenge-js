/**
 * function get number of total persons totalPersons
 * and killNumber indicates the person that is going
 * to get killed in the circle in a fixed direction.
 * than returns the safe place in the circle to survive.
 * 
 * @param {Number} totalPersons number of the amount persons in the case.
 * @param {Number} killNumber number that indicates the person
 * that is going to get killed in the circle in a fixed direction.
 * @returns {Number} safePlace is the number that indicated which place
 * in the circle of persons is the safe to survive.
 */

function josephusProblem(totalPersons, killNumber){
  if(killNumber >= totalPersons){

    killNumber = killNumber % totalPersons;
  }
  let currentPerson = 1;
  
  function rollTheGun(currentPerson){
    
    if(currentPerson = killNumber){
      if(currentPerson === totalPersons){
        return 1;
        /* because at any time the kill number is the last person,
        the one to survive will be the first one. */
      }
      return currentPerson + 1;
    }
    return rollTheGun(currentPerson + 1);
  }
  return rollTheGun(currentPerson);
}
module.exports = josephusProblem;