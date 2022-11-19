// Assertion function
const assertEqual = (actual, expected) => {
  if (actual === expected) {
    return console.log(`✅ Assertion Passed: ${actual} === ${expected} ✅`);
  } else {
    return console.log(`❌ Assertion Failed: ${actual} !== ${expected} ❌`);
  }
};

const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }

  // const isObject = (val) => {
  //   return typeof val === 'object' && !Array.isArray(val);
  // };

  for (const key in arr1) {
    const val1 = arr1[key];
    const val2 = arr2[key];

    // Check if object, once stuff is moved over.
    // if (isObject(val1) && isObject(val2)) {
    //   if (!eqObjects(val1, val2)) {
    //     return false;
    //   }
    //  continue;
    // }

    if (Array.isArray(val1) && Array.isArray(val2)) {
      if (!eqArrays(val1, val2)) {
        return false;
      }
      continue;
    }

    if (val1 !== val2) {
      return false;
    }

  }
  return true;
};


// recursion test code
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true); // => true
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false); // => false
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false); // => false
assertEqual(eqArrays([[[[[[[[2], 3], [4]]]]]]], [[[[[[[[2], 3], [4]]]]]]]), true); // => true
assertEqual(eqArrays([3, [4]], [3, [4]]), true);


// Test results
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);