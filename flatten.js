// Arrays assertion function
const assertArraysEqual = (actual, expected) => {
  let storedValue = 0;

  for (let key in actual) {
    if (actual[key] === expected[key])
      storedValue++;
  }

  if (storedValue % actual.length === 0) {
    return console.log(`✅ Assertion Passed: ${actual} === ${expected} ✅`);
  }

  return console.log(`❌ Assertion Failed: ${actual} !== ${expected} ❌`);
};
const eqArrays = (arr1, arr2) => {
  let storedValue = 0;

  for (let key in arr1) {
    if (arr1[key] === arr2[key])
      storedValue++;
  }
  if (storedValue % arr1.length === 0) {
    return true;
  }
  return false;
};


const flatten = (arr) => {
  let newArr = [];
  
  for (let value of arr) {
    if (Array.isArray(value)) {
      for (let number of value) {
        newArr.push(number);
      }
    } else {
      newArr.push(value);
    }
  }
  return newArr;
}


// Test results
console.log(flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6]