const assertEqual = require('../assertEqual');
const tail= require('../tail');
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