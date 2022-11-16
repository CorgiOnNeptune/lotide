// Assertion function
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

const assertArraysEqual = (actual, expected) => {
  if (eqArrays(actual, expected)) {
    return console.log(`✅ Assertion Passed: ${actual} === ${expected} ✅`);
  }

  return console.log(`❌ Assertion Failed: ${actual} !== ${expected} ❌`);
};

// Test results
assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [3, 2, 1]);
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]);