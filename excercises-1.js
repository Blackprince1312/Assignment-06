///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
////    ______                _   _                ////
////    |  ___|              | | (_)               ////
////    | |_ _   _ _ __   ___| |_ _  ___  _ __     ////
////    |  _| | | | '_ \ / __| __| |/ _ \| '_ \    ////
////    | | | |_| | | | | (__| |_| | (_) | | | |   ////
////    \_|  \__,_|_| |_|\___|\__|_|\___/|_| |_|   ////
////                                               ////
////                                               ////
////    ______               _   _                 ////
////    | ___ \             | | (_)                ////
////    | |_/ / __ __ _  ___| |_ _  ___ ___        ////
////    |  __/ '__/ _` |/ __| __| |/ __/ _ \       ////
////    | |  | | | (_| | (__| |_| | (_|  __/       ////
////    \_|  |_|  \__,_|\___|\__|_|\___\___|       ////
////                                               ////
////                                               ////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
// Q1
// Write a function called `sum` that takes two
// parameters and returns the sum of those 2 numbers.

function sum(a, b) {
  var added = a + b;
  return added
}
var sum1 = sum(2, 3)
console.log(sum1);
// Q2
// Write a function named `avg` that takes 3 parameters
// and returns the average of those 3 numbers.

function avg(avg1, avg2, avg3) {
  var avg = (avg1 + avg2 + avg3) / 3
  return avg
}
var avgCalc = avg(12, 32, 43)
console.log(avgCalc);
// Q3
// Write a function called `getLength` that takes one
// parameter (a string) and returns the length

function getLength(string) {
  var length = string.length
  return length
}

var length1 = getLength('hello world')
console.log(length1);
// Q4
// Write a function called `greaterThan` that takes
// two parameters and returns `true` if the second
// parameter is greater than the first. Otherwise
// the function should return `false`.

function greaterThan(param1, param2) {
  if (param1 < param2) {
    return true
  } else {
    return false
  }
}
var greaterThan1 = greaterThan(12, 14)
console.log(greaterThan1);
// Q5
// Write a function called `greet` that takes a
// single parameter and returns a string that
// is formated like "Hello, Name!" where *Name*
// is the parameter that was passed in.

function greet(param1) {
  var string = param1;
  return `${string} its beautiful outside`
}
var greeting = greet('Hello World')
console.log(greeting);
// Q6
// Write a function called `madlib` that takes
// 4 or more parameters (words). The function
// should insert the words into a pre-defined
// sentence. Finally the function should return
// that sentence.
// Note: When I say words and sentence I mean
// strings. For example:
// words: "quick", "fox", "fence"
// sentence: "quick brown fox jumps over the fence"

function madLib(param1, param2, param3, param4) {
  var sentence = `The ${param1} brown ${param2} jumps over the ${param3} to get the ${param4}`
  return sentence
}

var sentence1 = madLib('quick', 'fox', 'fence', 'hare')
console.log(sentence1);
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
