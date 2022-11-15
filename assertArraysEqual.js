// Assertion function
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

// Test results
assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [3, 2, 1]);
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]);