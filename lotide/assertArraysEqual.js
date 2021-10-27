function eqArrays(arr1 , arr2) {
  if (arr1.length != arr2.length)
    return "Arrays are not equal";
  else {
    // comapring each element of array
    for (var i = 0; i < arr1.length; i++)
      if (arr1[i] != arr2[i]) {
        return "Arrays are not equal";
      }
  }
  return "Arrays are equal";
}
console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => should PASS
console.log(eqArrays([1, 2, 3], [1, 2, 3, 4])); //FAIL
console.log(eqArrays([1, 2, 3], [3, 2, 3])); //FAIL
console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => true
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])); // => false