const assertEqual = require('../index').assertEqual;

assertEqual('Lighthouse Labs', 'Bootcamp');
assertEqual(1, 1);
assertEqual(2 + 5, 2);
assertEqual(0, null);