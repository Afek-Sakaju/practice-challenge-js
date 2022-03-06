const {partyOfCouple} = require('../partyOfCouple');

test('find single number in array of couples', () => {
  const array = [1, 2, 3, 2, 1];
  const size = 5;
  expect(partyOfCouple(array, size)).toBe(3);
})

test('return an string if there is no single number', () => {
  const array = [1, 2, 2, 1];
  const size = 4;
  expect(partyOfCouple(array, size)).toBe("there is no single number");
})