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

const letterPositions = (string) => {
  const resultsObject = {};

  // Iterate over each character of string
  for (const char in string) {
    const characterValue = string[char];
    const index = parseInt(char);

    // Skip adding spaces to the object
    if (characterValue !== ' ') {
      
      // Add the index value to a new key of if not yet defined in the object.
      if (!resultsObject[characterValue]) {
        resultsObject[characterValue] = [index];

        // If the key is already defined, push the additional index value to that character's key value.
      } else {
        resultsObject[characterValue].push(index);
      }
    }
  }

  return resultsObject;
};

// Test code
assertArraysEqual(letterPositions('hello world').e, [1]);
assertArraysEqual(letterPositions('hello').l, [2, 3]);

const testObject = {
  l: [0],
  i: [1, 11],
  g: [2],
  h: [3, 5, 15, 18],
  t: [4, 14],
  o: [6, 19],
  u: [7, 20],
  s: [8, 21],
  e: [9, 16, 22],
  n: [12]
};

assertArraysEqual(letterPositions('lighthouse in the house').e, testObject.e);