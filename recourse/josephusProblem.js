/**
 * function get number of total persons totalPersons
 * and killNumber indicates the person that is going
 * to get killed in the circle in a fixed direction.
 * than returns the safe place in the circle to survive.
 * 
 * @param {Number} totalPersons number of the amount persons in the case.
 * @param {Number} killNumber number that indicates the person
 * that is going to get killed in the circle in a fixed direction.
 * @returns {Number} returns the number that indicated which place
 * in the circle of persons is the safe to survive.
 */

function josephusProblem(totalPersons, killNumber){
  if(killNumber >= totalPersons){
    killNumber %= totalPersons;
  }
  /* because at any time the kill number is the last person,
  the one to survive will be the first one. */
  let currentPerson = 1;
  
  function rollTheGun(currentPerson){
    
    if(currentPerson === killNumber){
      return (currentPerson + 1);
    }
    else if(killNumber === 0 && currentPerson === 1){
      return currentPerson;
    }
    /* because at any time the kill number is the last person,
    the first if check (killNumber %= totalPersons) => will equal the kill number to 0,
    which means that it skipped all the persons and killed the last one
    than the one to survive is the first person.
     */
    return rollTheGun(currentPerson + 1);
  }
  return rollTheGun(currentPerson);
}
module.exports = josephusProblem;