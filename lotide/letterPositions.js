function letterPositions(sentence) {
  const results = {};

  for (var i = 0; i < sentence.length; i++) {
    if (sentence.charAt(i) !== " ") {
      if (results[sentence.charAt(i)]) {
        results[sentence.charAt(i)].push(i);
      } else {
        results[sentence.charAt(i)] = [i];
      }
    }
    
  }
  console.log('results', results);
  return results;
};


const line = 'hello';
var lineWithPositions = letterPositions(line);
console.log(lineWithPositions);