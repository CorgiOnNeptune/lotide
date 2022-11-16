// Function implementation
const assertEqual = (actual, expected) => {
  if (actual === expected) {
    return console.log(`✅ Assertion Passed: ${actual} === ${expected} ✅`);
  } else {
    return console.log(`❌ Assertion Failed: ${actual} !== ${expected} ❌`);
  }
};

const countLetter = (string) => {
  const charactersObject = {};
  string = string.replace(/[^a-z0-9]/gi, '');

  for (const char of string) {
    if (charactersObject[char]) {
      charactersObject[char] += 1;
    } else {
      charactersObject[char] = 1;
    }
  }
    
  return charactersObject;
};

console.log(countLetter('LHL'));
console.log(countLetter('Lighthouse Labs'));
console.log(countLetter('Diamonds on Neptune!!!!!!'));

// assertEqual(countLetter('LHL'), { L: 2, H: 1 });