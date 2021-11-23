const assertEqual = function (actual, expected) {
  if (actual.length === expected.length) {
    console.log(`Are arrays equal? : ${eqArrays(actual,expected)}`);
  } else if (actual.length !== expected.length) {
    console.log(`Are arrays unequal: True`);
  }
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
  assertEqual([1, 2, 3], [1, 2, 3]); // => should PASS
  assertEqual([1, 2, 3], [1, 2, 3, 4]); //FAIL
  assertEqual([1, 2, 3], [3, 2, 3]); //FAIL
  assertEqual(["1", "2", "3"], ["1", "2", "3"]); // => true
  assertEqual(["1", "2", "3"], ["1", "2", 3]); // => false