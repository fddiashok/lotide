const findWaldo = function (names, found) {
  names.forEach(function (element ,index) {
    let name= element;
    if (name === "Waldo") {
      found(index);   // execute callback
    }
  })

}

const actionWhenFound = function (index) {
  console.log(`Found him! at position:${index}`);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);