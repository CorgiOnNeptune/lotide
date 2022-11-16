// Assertion function
const assertEqual = (actual, expected) => {
  if (actual === expected) {
    return console.log(`✅ Assertion Passed: ${actual} === ${expected} ✅`);
  } else {
    return console.log(`❌ Assertion Failed: ${actual} !== ${expected} ❌`);
  }
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

// Test results
eqArrays([1, 2, 3], [1, 2, 3]);
eqArrays([1, 2, 3], [3, 2, 1]);

eqArrays(["1", "2", "3"], ["1", "2", "3"]);
eqArrays(["1", "2", "3"], ["1", "2", 3]);