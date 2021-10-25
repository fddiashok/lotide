const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} == ${expected}`);
  } else if (actual !== expected) {
    console.log(`Assertion Failed: ${actual} != ${expected}`);
  }
};
function head(array){
  if(array.length > 0){
    return array[0];
  }
  else return undefined;
}
assertEqual(head([]), 5);
assertEqual(head([6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");