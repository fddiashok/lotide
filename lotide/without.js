const assertEqual = function (actual, expected) {
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