const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} == ${expected}`);
  } else if (actual !== expected) {
    console.log(`Assertion Failed: ${actual} != ${expected}`);
  }
};

function eqArrays(a, b) {
  if (a.length != b.length)
    return false;
  else {
    // comapring each element of array
    for (var i = 0; i < a.length; i++)
      if (a[i] != b[i]) {
        return false;
      }
  }
  return true;
}
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [1, 2, 3, 4]), false); //FAIL
assertEqual(eqArrays([1, 2, 3], [3, 2, 3]), true); //FAIL
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]),false); // => false