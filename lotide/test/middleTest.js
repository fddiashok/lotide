const assertArraysEqual = require('../assertArraysEqual')
const middle= require('../middle');
assertArraysEqual([1, 2, 3, 4],[2, 3]);

assertArraysEqual(middle([1]),[]) // => pass
assertArraysEqual(middle([1, 2]),[]); // => pass
assertArraysEqual(middle([1, 2, 3]),[2,3]) // => fail
assertArraysEqual(middle([1, 2, 3, 4, 5]),[3]) // => Pass
assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 8, 9]),[4,5]) // => pass
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]),[3,4,1]) // => fail