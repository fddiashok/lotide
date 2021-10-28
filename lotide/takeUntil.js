const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const takeUntil =function(array,callback){
  let loopUntill =0;
  let result= [];
  // compare each element if it's less than 0 or not
  // as soom as we find an item less 0 then loop should end and 
for(let i=0;i<array.length;i++){
  if(callback(array[i])===true)
  loopUntill=loopUntill+i;
  else continue;
}
for(let j=0;j<loopUntill;j++){
result.push(array[j]);
}
return result;
}

const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);