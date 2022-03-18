/*
* 4/ get two nums and print the smallest num that is splitting by the two , 
* example: for 9 and 6 we get 18 . */
/**
 * the funtion "biggestFromRandom" roll 3 random numbers between 0-100 and print the numbers
 * than returns who is the biggest from all the 3
 * 
 * @return {Number} number of the biggest number from the 3 random numbers
 */
function biggestFromRandom(){
  const random1 = ~~(Math.random()*100);
  const random2 = ~~(Math.random()*100);
  const random3 = ~~(Math.random()*100);
  console.log(random1,random2,random3);
  const biggest = Math.max(random1,random2,random3);
  return biggest;
}

/**
 * function "randomNumDigitsSum" generates random number 
 * from 1000-9999 and print his numbers sum 
 */
function randomNumDigitsSum(){
  const difference = 9999-1000;
  let randomNum = Math.random();

  randomNum = Math.floor(randomNum * difference);
  randomNum += 1000;
  console.log(`This is the generated number: ${randomNum}`);
  let sumOfNum = 0;
  randomNum = JSON.stringify(randomNum);

  for(let i = 0; i < randomNum.length; i++){
    sumOfNum += parseInt(randomNum[i]);
  }
  console.log(`And that is the number digits sum: ${sumOfNum}`);
}

/**
 * function "biggestDivideNum" gets two numbers and returns a number
 * that is the biggest possible number to divide them both
 * 
 * @param {Number} num1 is number given to the function 
 * @param {Number} num2 is number given to the function
 * @returns {Number} biggest dividing number possible, that is divided 
 * by num1 and num2
 */
function biggestDivideNum(num1, num2){
  if(!num1 || !num2) return 0;
  
  let dividingNum = Math.max(num1, num2);
  do{
    let result1 = num1 % dividingNum;
    let result2 = num2 % dividingNum;

    if(!result1 && !result2){
      return dividingNum;
    }
  }while(dividingNum--)
}
module.exports = biggestDivideNum;
