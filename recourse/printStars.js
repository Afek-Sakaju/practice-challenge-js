function printStars(num) {
  if(!num) return;

  console.log('*'.repeat(num));
  printStars(num - 1);
}

module.exports = printStars;

