const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} == ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} != ${expected}`);
  }
};


const converStringToArray=function(string){
  if(string=''){
    
  }
  return (string.split(' ').join('')).split('');
}

const countLetters=function (string) {
  const input= converStringToArray(string);
  // console.log(input);
  const result={};
  for(let item of input){
    if(result[item]){
      result[item]+=1;
    }
    else result[item]=1
  }
  return result;
}
//Test Cases
console.log(countLetters("lighthouse in the house"));
console.log(countLetters("ashok"));
console.log(countLetters("the house"));
console.log(countLetters("aaaa bc cbad"));
console.log(countLetters(""));

/*Returning Number of occurences as primitive data type
function count_occur(str) {
  const noSpaces=str.split(' ').join('');
  if( noSpaces.length == 0 ) {
    console.log("Invalid string")
    return;
  }

  for(var i = 0 ;i < noSpaces.length ;i++) {
    var count = 0;
    for(var j = 0 ;j < noSpaces.length ;j++) {
      if(noSpaces[i] == noSpaces[j] && i > j) {
       break;
      }
      if(noSpaces[i] == noSpaces[j]) {
        count++;
      }
    }
    if( count > 0)
    console.log(`${noSpaces[i]} occurs ${count} times`);
  }
 
}*/