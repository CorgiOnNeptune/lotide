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