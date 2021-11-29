//Write a sorting function (sometimes called a custom comparator), that sorts the above array first by the name ascending alphabetically, and in cases where the names are equal sort by descending age.


const comparator = function(array){
  const results=students.sort(function(a,b){
    let nameA= a.name.toLowerCase();
    let nameB= b.name.toLowerCase();
    if(nameA<nameB)
    return -1;
    else if(nameA>nameB)
    return 1
    else return 0;
  })
return results;
};

const students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];

console.log(comparator(students));