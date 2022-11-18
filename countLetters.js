const countLetter = (str) => {
  const result = {};
  // Remove non-alpha-numeric characters from string
  str = str.replace(/[^a-z0-9]/gi, '');

  for (const char of str) {
    if (result[char] === undefined) {
      result[char] = 0;
    }

    result[char]++;
  }
    
  return result;
};

console.log(countLetter('LHL'));
console.log(countLetter('Lighthouse Labs'));
console.log(countLetter('Diamonds on Neptune!!!!!!'));
console.log(countLetter('L1ghth0u53 L4b5'));