// Function implementation
const assertEqual = (actual, expected) => {
  if (actual === expected) {
    return console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    return console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Test code
assertEqual('Lighthouse Labs', 'Bootcamp');
assertEqual(1, 1);
assertEqual(2 + 5, 2);
assertEqual(0, null);