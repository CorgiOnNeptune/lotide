// Assertion function
const assertEqual = (actual, expected) => {
  if (actual === expected) {
    return console.log(`✅ Assertion Passed: ${actual} === ${expected} ✅`);
  } else {
    return console.log(`❌ Assertion Failed: ${actual} !== ${expected} ❌`);
  }
};

const head = (arr) => {
  return arr[0];
}

assertEqual(head([5, 6, 7]), 5);
assertEqual(head(['Hello', 'Lighthouse', 'Labs']), 'Hello');
assertEqual(head([]), );
assertEqual(head(['one']), 1);
assertEqual(head([1, 2, 3, 4, 5, 10]), 10);