/* eslint-disable no-unused-vars */
const str1 = 'afek';

// char at index 2 is: 'e'
const charAt2 = str1.charAt(2);

// char at index 3 is: 'k'
const charAt3 = str1[3];

// concatRes should be: 'afek-sakaju'
const concatRes = str1.concat('-sakaju');

// 'afek' ends with 'ek'
const isEnds = str1.endsWith('ek');

// 'afek' is not ends with 'a'
const isNotEnds = str1.endsWith('a');

// 'afek' includes 'fe'
const isIncludes = str1.includes('fe');

// 'afek' isn't including 'zzz'
const isNotIncludes = str1.includes('zzz');

// indexOfK is 3
const indexOfK = str1.indexOf('k');

// length of 'afek' is 4
const length = str1.length;

// 'abc' is smaller then 'abz' should return -1
const compare1 = 'abc'.localeCompare('abz');

// 'az' is bigger then 'ab' should return 1
const compare2 = 'az'.localeCompare('ab');

// 'aaa' is equal to 'aaa' should return 0
const compare3 = 'aaa'.localeCompare('aaa');

// time1 should be 08:00
const time1 = '08:0'.padEnd(5, '0');

// time2 should be 01:30
const time2 = '1:30'.padStart(5, '0');

/* praise should be :
'you are awesome!'
'you are awesome!'
'you are awesome!' */
const praise = '\nyou are awesome!'.repeat(3);

// tealToTeam should be 'team'
const tealToTeam = 'teal'.replace('l', 'm');

// ek should be 'ek'
const ek = str1.slice(2, 4);

// arr should be ['a','ek]
const arr = str1.split('f');

// bottle should be 'bottle'
const bottle = '     bottle     '.trim();
