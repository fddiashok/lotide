const str = process.argv.slice(2);
let repeatBy = Number(str);
let array = [];
while (repeatBy > 0) {
  array.push(Math.ceil(Math.random() * 6));
  repeatBy--;
}
console.log(`Rolled ${Number(str)} dice: `, array.toString());
