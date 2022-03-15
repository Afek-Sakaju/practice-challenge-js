const shuffleName = require('../shuffleName');

test('return the string names shuffled', () => {
  expect(shuffleName('caffe greg')).toBe('greg caffe');
})