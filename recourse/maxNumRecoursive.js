function maxNumRecoursive(array) {
  let i = array.length - 1;
  let max = array[i];
  return checkMax(array[i]);

  function checkMax(currentNum){
    if(!i) return max;

    if(currentNum > max) {
      max = currentNum;
      return max;
    }

    currentNum = array[i-1];
    return checkMax(currentNum);
  }
}

module.exports = maxNumRecoursive;

