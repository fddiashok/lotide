const nameInverter = function (name) {
  let data = name.trim().split(" ");
  if (data === '') {
    return '';
  }
  else if(data.length>1){
    return data.reverse().join(" ");
  }
  return data;
}

console.log(nameInverter("ashok kumar"));
module.exports = nameInverter;