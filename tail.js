// Assertion function
const assertEqual = (actual, expected) => {
  if (actual === expected) {
    return console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    return console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = (arr) => {
  return arr.slice(1);
};

const result = tail(["Hello", "Lighthouse", "Labs"]);

assertEqual(result, ["Lighthouse", "Labs"]);
assertEqual(result, ["Labs"]);
assertEqual(result, []);
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "Labs");

// Test case: Check the original array
const words = ['Yo Yo', 'Lighthouse', 'Labs'];
tail(words);
assertEqual(words.length, 3);