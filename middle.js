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

const middle = (arr) => {
  let middleArr = [];
  const middleIndex = Math.floor(arr.length / 2);

  if (arr.length <= 2) {
    return middleArr;
  }

  // First value of even arr.length
  if (arr.length % 2 === 0) {
    middleArr.push(arr[middleIndex - 1]);
  }

  // Odd arr.length or second value of even arr.length
  if (arr.length % 2 === 1 || arr.length % 2 === 0) {
    middleArr.push(arr[middleIndex]);
  }

  return middleArr;
}


// Test results
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
assertArraysEqual(middle([]), []);
