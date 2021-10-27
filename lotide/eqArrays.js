const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} == ${expected}`);
  } else if (actual !== expected) {
    console.log(`Assertion Failed: ${actual} != ${expected}`);
  }
};

function eqArrays(arr1 , arr2) {
  if (arr1.length != arr2.length)
    return "Arrays are not equal";
  else {
    // comapring each element of array
    for (var i = 0; i < arr1.length; i++)
      if (arr1[i] !== arr2[i]) {
        return "Arrays are not equal";
      }
  }
  return "Arrays are equal";
}
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [1, 2, 3, 4]), false); //FAIL
assertEqual(eqArrays([1, 2, 3], [3, 2, 3]), true); //FAIL
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]),false); // => false