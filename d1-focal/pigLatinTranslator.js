let input = process.argv.slice(2);
let result =[];
for(let i=0;i<input.length;i++){
let arrayofStrings=input[i].split('');
let convertedArray=[];
for(let j=1;j<arrayofStrings.length;j++){
  convertedArray.push(arrayofStrings[j])
}
convertedArray.push(arrayofStrings[0]);
convertedArray.push('a');
convertedArray.push('y')
result.push(convertedArray.join(''))
}
console.log(result.join(' '));


// TEST CASE 1
//this is all just gibberish
// EXPECTED RESULT
// histay siay llaay ustjay ibberishgay


//TEST CASE 2
//this is a game
// histay siay aay amegay
