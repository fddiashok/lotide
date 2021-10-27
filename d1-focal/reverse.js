var input = process.argv.slice(2);

for(i=0;i<input.length;i++){
  console.log(reverse(input[i]));
}

function reverse(original) {
  return original.split('').reverse().join('');
}
