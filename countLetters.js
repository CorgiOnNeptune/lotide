const countLetters = (str) => {
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

console.log(countLetters('LHL'));
console.log(countLetters('Lighthouse Labs'));
console.log(countLetters('Diamonds on Neptune!!!!!!'));
console.log(countLetters('L1ghth0u53 L4b5'));

module.exports = countLetters;