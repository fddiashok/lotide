const findWaldo = function (names, found) {
  names.forEach(function (item ,index){
    let name= item;
    if (name === "Waldo") {
      found(index);   // execute callback
    }
  })

}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], function(index) {console.log(`Found him! at position:${index}`)});