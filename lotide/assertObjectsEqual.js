function eqObjects(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }

  const obj1keys = Object.keys(object1);
  for (var i = 0; i < obj1keys.length; i++) {
    let key = obj1keys[i];
    if (Array.isArray(object1[key])) {
      return eqArrays(object1[key], object2[key]);
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

function eqArrays(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (var i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};


console.log(eqObjects({ a: "1", b: "2" }, { b: "2", a: "1" }));
console.log(eqObjects({ b: "2", a: "1" }, { a: "1", b: "2", c: "3" }));
