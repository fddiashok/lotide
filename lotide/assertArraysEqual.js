const assertArraysEqual = function (actual, expected) {
  if (eqArray(actual, expected)) {
    console.log(`✅✅✅Assertion Passed: ${actual}=${expected}`);
  } else
    console.log(`🛑🛑🛑Assertion Failed: ${actual} != ${expected}`);

};

function eqArrays(arr1, arr2) {
  if (arr1.length != arr2.length)
    return false;
  else {
    // comapring each element of array
    for (var i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  }
}
assertArraysEqual([1, 2, 3], [1, 2, 3]); // => should PASS
assertArraysEqual([1, 2, 3], [1, 2, 3, 4]); //FAIL
assertArraysEqual([1, 2, 3], [3, 2, 3]); //FAIL
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // => true
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // => false