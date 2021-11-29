const assertArraysEqual = require('./assertArraysEqual');
const eqArrays= require('./eqArrays');

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

module.exports =middle;




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