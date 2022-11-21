const assertEqual = (actual, expected) => {
  if (actual === expected) {
    return console.log(`✅ Assertion Passed: ${actual} === ${expected} ✅`);
  } else {
    return console.log(`❌ Assertion Failed: ${actual} !== ${expected} ❌`);
  }
};

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


const eqObjects = (object1, object2) => {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  // Check if objects have the same amount of keys
  if (keys1.length !== keys2.length) {
    return false;
  }

  const isObject = (val) => {
    return typeof val === 'object' && !Array.isArray(val);
  };

  for (const key of keys1) {
    const value1 = object1[key];
    const value2 = object2[key];

    // Check if values are arrays. If they are, eqArrays.
    if (Array.isArray(value1) && Array.isArray(value2)) {
      if (!eqArrays(value1, value2)) {
        return false;
      }
      continue;
    }
    // Check if values are objects, if they are, recurse.
    if (isObject(value1) && isObject(value2)) {
      if (!eqObjects(value1, value2)) {
        return false;
      }
      continue;
    }

    if (value1 !== value2) {
      return false;
    }
  }
  return true;
};


// Recursion test code
console.log(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }));
// => true

console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }));
// => false

console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }));
// => false

// Test code
const ab = { a: '1', b: '2' };
const ba = { b: '2', a: '1' };
assertEqual(eqObjects(ab, ba), true);

const abc = { a: '1', b: '2', c: '3' };
assertEqual(eqObjects(ab, abc), false);


const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true);

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false);

module.exports = eqObjects;
