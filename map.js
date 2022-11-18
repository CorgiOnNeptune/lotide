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

const map = (arr, callback) => {
  const results = [];
  
  for (const element of arr) {
    results.push(callback(element));
  }

  return results;
};

// Test code
const words = ['high', 'above', 'me', 'hope', 'swarms', 'like', 'flies'];

const results1 = (map(words, word => word[0]));
assertArraysEqual(results1, ['h', 'a', 'm', 'h', 's', 'l', 'f']);

const results2 = (map(words, word => word += '!!!'));
assertArraysEqual(results2,
  ['high!!!', 'above!!!', 'me!!!', 'hope!!!', 'swarms!!!', 'like!!!', 'flies!!!']);

const results3 = (map(words, word => word[3]));
assertArraysEqual(results3,
  ['h', 'v', undefined, 'e', 'r', 'e', 'e']);