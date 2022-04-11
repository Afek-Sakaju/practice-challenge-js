const {charOccurCount} = require('../charOccurCount');

describe('charOccurCount tests', () => {
  test.each([
    ['abcddd', 'd', 3],
    ['3416123', '6', 1],
    ['7sa667', '7', 2],
    ['hadrielbenjo', 'j', 1],
    ['k', 'k', 1],
  ])('function gets str: "%s" ,char: "%s", and returns: "%s"',(str,char,result) => {
    expect(charOccurCount(str,char)).toBe(result);
  })
  test.each([
    ['', 'a'],
    ['hello', '2'],
    ['h e y', 'j'],
    ['123', '9'],
    ['0', '1']
  ])('function gets str: "%s" ,char: "%s", and returns 0',(str,char) => {
    expect(charOccurCount(str,char)).toBeFalsy();
  })
})
