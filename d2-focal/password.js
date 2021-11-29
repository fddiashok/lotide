const passwordInput = process.argv.slice(2).toString();
// Every "a" in the string should be replaced with a "4".
// Every "e" in the string should be replaced with a "3".
// Every "o" (oh) in the string should be replaced with a "0" (zero).
// Every "l" (el) in the string should be replaced with a "1" (one).
const obfuscate = function (data) {
  const arrayofStrings = data.split('');
  const obfuscatedPswd = [];
  for (let item of arrayofStrings) {
    if (item === 'a') {
      obfuscatedPswd.push('4');
    } else if (item === 'e') {
      obfuscatedPswd.push('3');
    } else if (item === 'o') {
      obfuscatedPswd.push('0');
    } else if (item === 'l') {
      obfuscatedPswd.push('1');
    }
    else obfuscatedPswd.push(item);
  }
  return obfuscatedPswd.join('');
};


console.log(obfuscate(passwordInput));



//TEST CASES
// INPUT                                 OUTPUT
// abracadabra                         4br4c4d4br4
// password                            p4ssw0rd
// audaciously                         4ud4ci0us1y