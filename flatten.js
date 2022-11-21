// Arrays assertion function
const eqArrays = (arr1, arr2) => {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    return false;
  }
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let key in arr1) {
    if (arr1[key] !== arr2[key]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = (actual, expected) => {
  if (eqArrays(actual, expected)) {
    return console.log(`✅ Assertion Passed: ${actual} === ${expected} ✅`);
  }

  return console.log(`❌ Assertion Failed: ${actual} !== ${expected} ❌`);
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
};


// Test results
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);

module.exports = flatten;