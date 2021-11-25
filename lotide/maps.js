const assertArraysEqual = function (actual, expected) {
  if (actual.length === expected.length) {
    console.log(`✅✅✅Assertion Passed : ${eqArrays(actual,expected)}`);
  } else if (actual.length !== expected.length) {
    console.log(`🛑🛑🛑Assertion Failed: ${eqArrays(actual,expected)}`);
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

const map = function (array, callback) {
  let results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  console.log(results);
  return results;
}


const numbers=[2,4,6,8,1,3,5]
assertArraysEqual(map(numbers,item=> item*2),[4,8,12,16,2,6,10])


const words = ["ground", "control", "to", "major", "tom"];
assertArraysEqual(map(words,item=> item[0]),['g','c','t','m','t']);

