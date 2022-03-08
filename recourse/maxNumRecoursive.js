function maxNumRecoursive(array) {
  let i = array.length - 1;
  let max = array[i];
  if(!i) return max;
  i--;
  return[array[i]]
}

console.log(maxNumRecoursive([1,4,5]));

