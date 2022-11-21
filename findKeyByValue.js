const assertEqual = (actual, expected) => {
  if (actual === expected) {
    return console.log(`✅ Assertion Passed: ${actual} === ${expected} ✅`);
  } else {
    return console.log(`❌ Assertion Failed: ${actual} !== ${expected} ❌`);
  }
};

const findKeyByValue = (object, value) => {

  // Using Object.keys() with for...of loop
  for (const key of Object.keys(object)) {
    if (object[key] === value) {
      return key;
    }
  }

  // Using a for...in loop
  // for (const key in object) {
  //   if (object[key] === value) {
  //     return key;
  //   }
  // }
};



const bestTVShowsByGenre = {
  sci_fi: 'The Express',
  comedy: 'Brooklyn Nine-Nine',
  drama: 'The Wire',
  horror: 'Chucky'
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "Chucky"), 'horror');

module.exports = findKeyByValue;