const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} == ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} != ${expected}`);
  }
};

//Are Arrays Equal?
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

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function (object1, object2) {
  const keys1 = Object.keys(object1)
  const keys2 = Object.keys(object2);

  //check if values are arrays or not
  if (keys1.length == keys2.length) {
    for (let item of keys1) {
      // console.log(`object1 : ${object1[item]} AND object2: ${object2[item]}`)
      if(Array.isArray(object1[item])&& Array.isArray(object2[item])){
        return eqArrays(object1[item],object2[item]);
      }
      else if (object1[item] !== object2[item])
        return false
    }
    return true

  }
  else return false;
};

console.log("ASSERTION RESULTS FOR PRIMITIVE DATA TYPES---------------");
//ASSERTIONS FOR PRIMITIVE VLAUES
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), true); // => false

console.log("ASSERTION RESULTS FOR ARRAYS-----------")
// ASSERTIONS FOR ARRAY VALUES
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), true); // => false





























/*function letterPositions(sentence) {
  const results = {};

  for (var i = 0; i < sentence.length; i++) {
    if (sentence.charAt(i) !== " ") {
      if (results[sentence.charAt(i)]) {
        results[sentence.charAt(i)].push(i);
      } else {
        results[sentence.charAt(i)] = [i];
      }
    }

  }
  console.log('results', results);
  return results;
};


const line = 'hello';
var lineWithPositions = letterPositions(line);
console.log(lineWithPositions);*/