const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} == ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} != ${expected}`);
  }
};
function count_occur(str) {
  if( str.length == 0 ) {
    console.log("Invalid string")
    return;
  }

  for(var i = 0 ;i < str.length ;i++) {
    var count = 0;
    for(var j = 0 ;j < str.length ;j++) {
      if(str[i] == str[j] && i > j) {
       break;
      }
      if(str[i] == str[j]) {
        count++;
      }
    }
    if( count > 0)
    console.log(`${str[i]} occurs ${count} times`);
  }
 
}
 
// let test_str = "LHLKFGH";
count_occur("LHLKFGH");
count_occur("AMMANO");
count_occur("EDDIE");
count_occur("JOHN");