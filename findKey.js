const assertEqual = (actual, expected) => {
  if (actual === expected) {
    return console.log(`✅ Assertion Passed: ${actual} === ${expected} ✅`);
  } else {
    return console.log(`❌ Assertion Failed: ${actual} !== ${expected} ❌`);
  }
};

const findKey = (obj, callback) => {
  for (const key in obj) {
    if (callback(obj[key])) {
      return key;
    }
  }
};


// test code
// const movies = {
//   "Blue Hill": { stars: 1 },
//   "Akaleri": { stars: 3 },
//   "noma": { stars: 2 },
//   "elBulli": { stars: 3 },
//   "Ora": { stars: 2 },
//   "Akelarre": { stars: 3 }
// };

// assertEqual(findKey(movies, x => x.stars === 2), 'noma');
// assertEqual(findKey(movies, x => x.stars === 1), 'Blue Hill');
// assertEqual(findKey(movies, x => x.stars === 3), 'Akaleri');
// assertEqual(findKey(movies, x => x.stars < 2), 'Blue Hill');
// assertEqual(findKey(movies, x => x.stars === 5), undefined);

module.exports = findKey;