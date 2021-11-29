function sumToOne(n) {
  let sum=0
  if(n>0){
sum=n+sumToOne(n-1)
  }
  return sum;
}

console.log(sumToOne(2));
/*
function sumToOne(n) {
  if (n === 1) {
    return 1;
  }

  return n + sumToOne(n - 1);
}

console.log(sumToOne(4));*/