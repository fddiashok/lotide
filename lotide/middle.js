const assertEqual = function (array, expected) {
  const actual=middle(array);
  if (eqArrays(actual,expected)) {
    console.log(`✅✅✅Assertion Passed: [${actual}] == [${expected}]`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: [${actual}] != [${expected}]`);
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

const middle = function (array) {
  const mid = [];
  const length = array.length
  if (length === 1 || length === 2) {
    return [];
  }
  else {
    if (length % 2 === 0) {
      const startAt = length / 2 - 1;
      const endAt = startAt + 1;
      for (let i = startAt; i <= endAt; i++) {
        mid.push(array[i])
      }
      return mid
    }
    else {
      const startAt = Math.floor(length / 2);
      const endAt = startAt;
      for (let j = startAt; j <= endAt; j++) {
        mid.push(array[j]);
      }
      return mid;
    }
  }
}

assertEqual([1, 2, 3, 4],[2, 3]);

assertEqual([1],[]) // => pass
assertEqual([1, 2],[]); // => pass
assertEqual([1, 2, 3],[2,3]) // => fail
assertEqual([1, 2, 3, 4, 5],[3]) // => Pass
assertEqual([1, 2, 3, 4, 5, 6, 8, 9],[4,5]) // => pass
assertEqual([1, 2, 3, 4, 5, 6],[3,4,1]) // => fail




/*Another Feasible Solution
function middle(array) {
  var middle = [];
  var end = array.length-1;//4
  var start = 0;//0
  mid = parseInt((end - start)/2);//4
  console.log(mid);//2
if(mid != 0) {
  middle.push(array[mid]);
  if(end % 2 != 0) {
  middle.push(array[mid+1]);
  }
}

  return middle;
}
*/