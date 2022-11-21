const assertEqual = require('../assertEqual');
const tail = require('../tail');


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