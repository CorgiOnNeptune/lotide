const letterPositions = (string) => {
  const resultsObject = {};

  // Iterate over each character of string
  for (const char in string) {
    const charValue = string[char];
    const index = parseInt(char);

    // Skip adding spaces to the object
    if (charValue !== ' ') {
      
      // If the key is already defined, push the index value to that character's key value.
      if (resultsObject[charValue]) {
        resultsObject[charValue].push(index);
      }

      // Add the index value to a new key of if not yet defined in the object.
      if (!resultsObject[charValue]) {
        resultsObject[charValue] = [index];
      }
    }
  }

  return resultsObject;
};

module.exports = letterPositions;