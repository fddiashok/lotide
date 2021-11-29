/*const assertEqual = function (string, expected) {
const actual =string;
  if (actual.length === expected.length) {
    console.log(`Are arrays equal? : ${eqArrays(actual, expected)}`);
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
}*/

const converStringToArray = function (string) {

  const arrayOfStrings = string.split('');
  // console.log(arrayOfStrings);
  return arrayOfStrings;
}

const letterPositions = function (sentence) {
  const results = {};
  // logic to update results here
  const array = converStringToArray(sentence);
  console.log(array);

  for (let item of array) {
    if (item !== ' ') {
      results[item] = [];
      array.forEach((element, index) => {
        if (item === element) {
          results[item].push(index);
        }
      })
    }
  }
  return results;
};

assertEqual((letterPositions("hello world")['e']),[1])
// console.log(letterPositions("hello world"));
// console.log(letterPositions("mmmm"));
// console.log(letterPositions("world world"));































/*function letterPositions(sentence) {
  const results = {};
  console.log(sentence.length);
  for (var i = 0; i < sentence.length; i++) {
    if (sentence.charAt(i) !== " ") {
      if (results[sentence.charAt(i)]) {
        results[sentence.charAt(i)].push(i);
      } else {
        results[sentence.charAt(i)] = [i];
      }
    }

  }
  return results;
};


const line = 'lighthouse in the house';
var lineWithPositions = letterPositions(line);
console.log(lineWithPositions);*/
