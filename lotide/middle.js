function eqArrays(a, b) {
  if (a.length != b.length)
    return false;
  else {
    // comapring each element of array
    for (var i = 0; i < a.length; i++)
      if (a[i] !== b[i]) {
        return false;
      }
    return true;
  }

}
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} == ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} != ${expected}`);
  }
};
function middle(array) {
  var middle = [];
  var end = array.length-1;
  var start = 0;
  mid = parseInt((end - start)/2);
  
if(mid != 0) {
  middle.push(array[mid]);
  if(end % 2 != 0) {
  middle.push(array[mid+1]);
  }
}

  return middle;
}

console.log(middle([1,2,3,4,5]));
console.log(middle([1,2,3,4]));
console.log(middle([1,2,3]));
console.log(middle([1,2]));
console.log(middle([1]));
console.log(middle([]));
