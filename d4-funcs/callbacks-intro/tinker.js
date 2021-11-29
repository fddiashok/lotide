// The second argument/parameter is expected to be a (callback) function
const findWaldo = function(names, found) {
  for (let i = 0; i < names.length; i++) {
    let name = names[i];
    let index=i;
    if (name === "Waldo") {
      found(index);   // execute callback
    }
  }
}

const actionWhenFound = function(index) {
  console.log(`Found him! at ${index}`);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);