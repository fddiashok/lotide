const args = process.argv;
let remianingElements = args.slice(2);
let sum = 0;
for (let i = 0; i < remianingElements.length; i++) {
  sum = sum + Number(remianingElements[i]);
}
console.log(sum);
