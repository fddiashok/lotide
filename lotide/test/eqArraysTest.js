const assertEqual =require('../assertEqual')
const eqArrays= require('../eqArrays');


assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [1, 2, 3, 4]), false); //FAIL
assertEqual(eqArrays([1, 2, 3], [3, 2, 3]), true); //FAIL
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => fals