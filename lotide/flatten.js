//Create a function flatten which will take in an array containing elements including nested arrays of elements, //and return a "flattened" version of the array.
//only handle one level of nesting.
const flatten = function (data) {
  const flattenedArray = [];
  for (const item of data) {
    if (!Array.isArray(item)) {
      flattenedArray.push(item);
    }
    else {
      for (const innerItem of item) {
        flattenedArray.push(innerItem);
      }
    }
  }
  console.log(flattenedArray);
}






//Test Case
flatten([1, 2, [3, 4], 5, [6]]) // => [1, 2, 3, 4, 5, 6]
flatten([[1, 2], [3, 4], 5, [6]])
flatten([[1, 2], [3, 4], [5, 6]])
flatten([1, [2], [3, 4], 5, [6]])
flatten([[1, 2, 3, 4, 5, 6]])