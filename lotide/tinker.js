

// const smartGarbage=function(trash ,bins){
//   let key = Object.keys(bins)
//   console.log(key);
//  for(item of key){
//    if(item===trash){
//      bins[item]+=1;
//    }
//  }console.log(bins);
// }


// smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 });
//We want to find a recipe that utilizes one ingredient from Bakery A and one from Bakery B.
/*const chooseRecipe = function (bakeryA, bakeryB, recipes) {
  const chooseRecipe = function(bakeryA, bakeryB, recipes) {
    for (let i = 0 ; i < bakeryA.length ; i++){
      for (let j = 0 ; j < bakeryB.length ; j++){
        for (let x = 0 ; x < recipes.length ; x++){
          if (recipes[x].ingredients.join() === bakeryA[i] + ',' + bakeryB[j] ||
          recipes[x].ingredients.join() === bakeryB[j] + ',' + bakeryA[i]){
            return recipes[x].name;
          }
        }
      }
    }
  }

let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
let bakeryB = ['milk', 'butter', 'cream cheese'];
let recipes = [
  {
    name: 'Coconut Sponge Cake',
    ingredients: ['coconut', 'cake base']
  },
  {
    name: 'Persian Cheesecake',
    ingredients: ['saffron', 'cream cheese']
  },
  {
    name: 'Custard Surprise',
    ingredients: ['custard', 'ground beef']
  }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));*/
/*
bakeryA = ['potatoes', 'bay leaf', 'raisins'];
bakeryB = ['red bean', 'dijon mustard', 'apples'];
recipes = [
    {
        name: 'Potato Ganache',
        ingredients: ['potatoes', 'chocolate']
    },
    {
        name: 'Sweet Fish',
        ingredients: ['anchovies', 'honey']
    },
    {
        name: "Nima's Famous Dijon Raisins",
        ingredients: ['dijon mustard', 'raisins']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));*/


/*const count=function(array){
  return array.length;
}
const concatArray = function(array1,array2){
for(item of array2){
  array1.push(item);
}
return sort(array1);
}

const sort = function(array){
  return array.sort((a,b)=>{return a - b})
}

const removeRedundantData= function(array){
//
let uniqueArray= [];
array.forEach(element => {
  if(!uniqueArray.includes(element)){
    uniqueArray.push(element);
  }

});
 return uniqueArray;

}
const merge = function(array1,array2){
return removeRedundantData(sort(concatArray(array1,array2)));

}
console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 5, 6 ]);
console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);*/
// const median = function (arr) {
//   /* IMPLEMENT ME */
//   let meanOfEvenArray;
//   let item1, item2
//   let sortedArray = arr.sort((a, b) => {
//     return a - b;
//   });
//   let start = 0//0
//   end = sortedArray.length - 1;//3
//   let middle = Math.floor((end - start) / 2);//1 median([1,2,3,4]) === 2.5:
//   if (arr.length % 2 !== 0) {
//     return (sortedArray[middle]);
//   }

//   else {
//     item1 = sortedArray[middle];
//     console.log(item1);
//     item2 = sortedArray[middle + 1];
//     console.log(item2);
//     meanOfEvenArray = ((item1 + item2) / 2);
//     console.log(meanOfEvenArray);
//   }

// };

// median([4, 5, 1, 3, 2]);
// median([4, 1, 3, 2]);
//LETTER POSITIONS

// input -sentence
//output - object with letter-index value pairs
// const letterPositions = function(sentence) {
//   const results = {};
//   // logic to update results here
//   for (let letter of sentence){
//     if(letter ===" "{
//     continue;
//     }

//   else if()



// }
//   return results;
// };



// letterPositions("hello");

/*COUNT LETTERS
//Input is string
//return an object where key= letter and value=count of each letter in the string
const countLetters = function(string){
const result ={};
for(let leter of string){
  if(leter===" "){
    continue;
  }
  else if(result[leter]){
    result[leter]+=1;
  }
  else result[leter] =1;
  }

  return result;
}
console.log(countLetters("lighthouse in the house"));




/*Middle function
const middle = function (array) {
  let result = [];
  let start;
  let end;
  if (array.length <= 2)
    return result;
  else if (array.length % 2 === 0) {
    start = (array.length/2)-1;
    end = start+1
    for(start;start<=end;start++){
      result.push(array[start])
    }
    return result;
  }
  else if (array.length % 2 !== 0) {
    start = Math.floor(array.length/2);
    end = start+1
    for(start;start<end;start++){
      result.push(array[start])
    }
    return result;

  }

}
console.log(middle([1])) // => []
console.log(middle([1, 2])) // => []
console.log(middle([1, 2, 3])) // => [2]
console.log(middle([1, 2, 3, 4, 5])) // => [3]
console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4]*/





//COUNTONLY FUNCTION

//array and Obejct as parameters
//count numbers of time as key appears in the array
//return key alongwith it's count in an object
// Edge case -if a key is not present in object arg skip it 
//& if a key is not present in the array skip it
/*
function countOnly(allItems, itemsToCount) {
  const results = {};

  for (const item of allItems) {
    if (itemsToCount[item] === true) {//fang =true
      if (results[item]) {//result[fang] -false
        results[item] += 1;
      } else {
        results[item] = 1;//result[fang]=1
      }
    }
  }

  return results;
};



const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
// assertEqual(result1["Jason"], 1);
// assertEqual(result1["Karima"], undefined);
// assertEqual(result1["Fang"], 2);
// assertEqual(result1["Agouhanna"], undefined);*/