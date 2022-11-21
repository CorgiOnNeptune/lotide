# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @justinbennett/lotide`

**Require it:**

`const _ = require('@justinbennett/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertEqual()`: Assertion function to strictly assess primitive data types.
* `assertArraysEqual()`: Assertion function utilizing eqArrays to test equality of objects.
* `assertObjectsEqual()`: Assertion function utilizing eqObjects to test equality of objects.
* `countLetters(str)`: Function that counts the amount of alpha-numeric characters within a given string.
* `countOnly()`: From an array of items (arg 1), return a count of only the given values in (arg 2).
* `eqArrays()`: Function to strictly and deeply verify equality of arrays.
* `eqObjects()`: Function to strictly and deeply verify equality of objects.
* `findKey()`: Find the first key value matching the results of a callback function.
* `findKeyByValue()`: Given the value, finds the matching key of an object.
* `flatten()`: Flattens nested array values by one level.
* `head()`: Returns the first value in an array.
* `letterPositions()`: Given a string, returns an object of the unique characters and all indicies that character is found.
* `map()`: A custom variation of .map() that alters values in an array based on the given callback.
* `middle()`: Returns the middle value(s) in an array.
* `tail()`: Returns all but the first value in an array.
* `takeUntil()`: Returns all values in a given array up until the given callback.
* `without()`: Returns a copy of an array (arg 1) with values given in arg 2 removed.