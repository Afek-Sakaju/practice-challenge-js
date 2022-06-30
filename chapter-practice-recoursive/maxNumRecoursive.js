function maxNumRecoursive(array, max = array[0], i = array.length-1){
  if(!i) return max;
  if(array[i] > max) max = array[i];
  return maxNumRecoursive(array, max, i-1);
}

module.exports.maxNumRecoursive = maxNumRecoursive;

