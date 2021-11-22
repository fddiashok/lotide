const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅${actual} == ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑${actual} != ${expected}`);
  }
};
const tail = function(array) {
  let newArray = [];
  if(array.length>1){
  for (let i = 1; i < array.length; i++) {
    newArray.push(array[i]);
  }
  return (newArray);}
  if(array.length===1 || array.length===0){
    return newArray;
  }
};



// Test Case 1: Check the returned array elements
let result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); 
assertEqual(result[0], "Lighthouse"); 
assertEqual(result[1], "Labs");

//TEST CASE 2 :
result=tail(['one']);
assertEqual(result.length, 0);

//TEST CASE 3 :
result=tail([]);
assertEqual(result.length, 0);