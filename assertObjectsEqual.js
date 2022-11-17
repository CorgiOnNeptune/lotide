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

const eqObjects = function (object1, object2) {
  const object1Keys = Object.keys(object1);
  const object2Keys = Object.keys(object2);

  // Check if objects have the same amount of keys
  if (object1Keys.length !== object2Keys.length) {
    return false;
  }

  // Check if the values of the keys on each object match.
  for (const key of object1Keys) {

    // Check if value of the key is an array.
    // If so, use eqArrays function to compare
    // the values then return the result.
    if (Array.isArray(object1[key]) || Array.isArray(object2[key])) {
      return eqArrays(object1[key], object2[key]);
    }

    // If value is not an array, check if they match.
    if (object1[key] !== object2[key]) {
      return false;
    }
  }

  return true;
};

const assertObjectsEqual = (actual, expected) => {
  const inspect = require('util').inspect;

  if (eqObjects(actual, expected)) {
    return console.log(`✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)} ✅`);
  } else {
    return console.log(`❌ Assertion Failed: ${inspect(actual)} !== ${inspect(expected)} ❌`);
  }
};

// Test code
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc), true;