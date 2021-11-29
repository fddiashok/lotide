/*const input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];
// Pythagorean
const result = input.map(function(object,index){
  let xSquare=object['x']*object['x'];
  let ySquare=object['y']*object['y'];
  return Math.sqrt(xSquare+ ySquare);
});

console.log(result[0] === 5);
console.log(result[1] === 13);
console.log(result[2] === 17);*/


const students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];
// const students = ["bruce", "zoidberg","alex", "alex"]

const results= students.sort((a,b)=>{return a.name- b.name});
console.log(results);
// const sortedArray = results.sort