const str = process.argv.slice(2);
let number = Number(str);
let repeatBy = number;
let array = [];
while (repeatBy > 0) {
  array.push(Math.floor(Math.random() * 7));
  repeatBy--;
}
console.log(`Rolled ${number} dice: `, array.toString());
