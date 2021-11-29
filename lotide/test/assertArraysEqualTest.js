const assertArraysEqual=require('../assertArraysEqual');
const eqArrays = require('../eqArrays');
assertArraysEqual([1, 2, 3], [1, 2, 3]); // => should PASS
assertArraysEqual([1, 2, 3], [1, 2, 3, 4]); //should fail
assertArraysEqual([1, 2, 3], [3, 2, 3]); //should fail
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // => should pass
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // => should fail