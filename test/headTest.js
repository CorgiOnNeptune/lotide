const assertEqual = require('../assertEqual');
const head = require('../head');

assertEqual(head([5, 6, 7]), 5);
assertEqual(head(['Hello', 'Lighthouse', 'Labs']), 'Hello');
assertEqual(head([]),);
assertEqual(head(['one']), 1);
assertEqual(head([1, 2, 3, 4, 5, 10]), 10);