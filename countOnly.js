// Function implementation
const assertEqual = (actual, expected) => {
  if (actual === expected) {
    return console.log(`✅ Assertion Passed: ${actual} === ${expected} ✅`);
  } else {
    return console.log(`❌ Assertion Failed: ${actual} !== ${expected} ❌`);
  }
};

const countOnly = (allItems, itemsToCount) => {
  const results = {};

  for (const item of allItems) {
    
    if (!itemsToCount[item]) {
      continue;
    }

    if (!results[item]) {
      results[item] = 0;
    }

    results[item]++;
  }
  return results;
};

// Test code
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);

module.exports = countOnly;
