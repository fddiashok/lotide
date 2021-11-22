function loopyLighthouse(range, multiples, words) {
  for (range[0]; range[0] <= range[1]; range[0]++) {
    if (range[0] % multiples[0] === 0 && range[0] % multiples[1] === 0) {
      console.log(words[0] + words[1]);
    } else if (range[0] % multiples[0] === 0 && range[0] % multiples[1] !== 0) {
      console.log(words[0]);
    } else if (range[0] % multiples[0] !== 0 && range[0] % multiples[1] === 0) {
      console.log(words[1]);
    } else console.log(range[0]);
  }
}
loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);