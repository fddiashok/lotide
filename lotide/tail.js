const assertEqual = require('./assertEqual');
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


module.exports = tail;