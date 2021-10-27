function eqArrays(a, b) {
  if (a.length != b.length)
    return false;
  else {
    // comapring each element of array
    for (var i = 0; i < a.length; i++)
      if (a[i] !== b[i]) {
        return false;
      }
  }
  return true;
}
console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => should PASS
console.log(eqArrays([1, 2, 3], [1, 2, 3, 4])); //FAIL
console.log(eqArrays([1, 2, 3], [1, 3, 3])); //FAIL
console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => true
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])); // => false