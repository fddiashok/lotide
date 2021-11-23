const assertArraysEqual = function (actual, expected) {
  if (actual.length === expected.length) {
    console.log(`${eqArrays(actual,expected)}`);
  } else if (actual.length !== expected.length) {
    console.log(`false`);
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
const without = function (source, itemsToRemove) {
  const newArray = [];
  // if (array1.length >= array2.length) {
  for (let i = 0; i < source.length; i++) {
    if (!itemsToRemove.includes(source[i])) {
      newArray.push(source[i])
    }
  }
  console.log(newArray);

};

//Test Cases 
without([1, 2, 3], [1]) // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]
without(["1", "2", "3"], [1, "2", "3", "4"]) // => ["1"]
without(["1", "2", "3","4"], ["1", "2", "3"]) // => ["4"]
without(["1", "2", "3","4"], []) // => ["1", "2", "3", "4"]

// Test Cases to verify if any changes made to source array or not
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); 
assertArraysEqual(words, ["hello", "world", "lighthouse"]);