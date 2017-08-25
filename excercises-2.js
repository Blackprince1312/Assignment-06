// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// ---------------------
function max(param1, param2) {
  var maxNumber = Math.max(param1, param2)
  return maxNumber
}

var max = max(10, 20)
console.log(max);
// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------
function maxOfThree(param1, param2, param3) {
  var maxOfThree = Math.max(param1, param2, param3)
  return maxOfThree;
}
var maxedThree = maxOfThree(10, 20, 33)
console.log(maxedThree);
// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------
function isVowel(char) {

  if (char[0] === 'a' || char[0] === 'e' || char[0] === 'i' || char[0] === 'o' || char[0] === 'u') {
    return true
  } else {
    return false
  }
}

var returned = isVowel('hello')
var returned1 = isVowel('aello')

console.log(returned);
console.log(returned1);

// ---------------------
// Write a function translate() that will translate a text into "rÃ¶varsprÃ¥ket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------
function rovarspraket(phrase) {
  //...
}
//Begin exercise
function checkConsonants(letterToCheck) {
  var consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];
  var isConsonant = false;

  for (i = 0; i < consonants.length; i++) {
    if (letterToCheck == consonants[i]) {
      isConsonant = true;
    }
  }
  return isConsonant;
}

function translate(funString, letterO) {

  var newString = '';

  for (var i = 0; i < funString.length; i++) {
    if (checkConsonants(funString[i])) {
      newString += funString[i] + letterO + funString[i];
    } else {
      newString += funString[i];
    }
  }
  console.log('The "rövarspråket" result is: ' + '"' + newString + '"');
}

translate('this is fun', 'o');
// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------
function reverse(str) {
  var splitString = str.split("");
  var reverseArray = splitString.reverse()
  var joinArray = reverseArray.join("")

  return joinArray;
}

var reverser = reverse('Hello')

console.log(reverser);
// ---------------------
// Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
// ---------------------
function findLongestWord(words) {
  var longestWord = words.sort(function(a, b) {
    return b.length - a.length
  })[0]
  return longestWord
}

var array = ['hello', 'bob', 'roberto']
var finder = findLongestWord(array)
console.log(finder);
// ---------------------
// Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
// ---------------------
var filterLongWords = function(array, i) {
  var newArray = [];
  array.forEach(function(element) {
    if (element.length > i) {
      newArray.push(element)
    };
  });
  return newArray;
}

console.log(filterLongWords(["hello", "my", "name", "is", "tenkai"], 3));
// ---------------------
// Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
// ---------------------
function charFreq(string) {
  var freq = {}
  for (var i = 0; i < string.length; i++) {
    var character = string.charAt(i)
    if (freq[character]) {
      freq[character]++;
    } else {
      freq[character] = 1
    }
  }
  return freq
}

var checkfreq = charFreq("abbabcbdbabdbdbabababcbcbab")
console.log(checkfreq);
