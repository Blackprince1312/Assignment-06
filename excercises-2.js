// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// ---------------------

function max(num1, num2){
    if (num1 > num2) {
		return num1;
	} else {
		return num2;
	}
}

  console.log (max(0, 150));


// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------

function maxOfThree(num1, num2, num3){
	if (num1> num2) {
		if (num1 > num3) {
			return num1;
		}
		else {
			return num3;
		}
	}
	else if (num2 > num3) {
		return num2;
	}
	else {
		return num3;
	}

   }
   var arr = [1,150,350]
   var max = Math.max (arr)
  console.log (maxOfThree(1, 150, 350));

// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------

var findVowel = function(letter) {

    var vowels = ["a", "e", "i", "o", "u"];

    for(var i = 0; i < vowels.length; i++){
        if(letter === vowels[i]){
            return true;
         }
    }
    
    return false;

};


// ---------------------
// Write a function translate() that will translate a text into "rÃ¶varsprÃ¥ket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------

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
    console.log( '"' + newString + '"');
}

translate('this is fun', 'o');


// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

function reverse(str) {
    var text = '';
    
    for (var i = str.length - 1; i >= 0; i--) {
    	text += str[i];
    	continue
    }
    return text.toLowerCase();
}
console.log(reverse("Kosal"));

// ---------------------
// Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
// ---------------------

function longestWord(string) {
    var str = string.split(" ");
    var longest = 0;
    var word = null;
    for (var i = 0; i < str.length - 1; i++) {
        if (longest < str[i].length) {
            longest = str[i].length;
            word = str[i];
        }
    }
    return word;
}
// ---------------------
// Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
// ---------------------

function filterWords(words, i){
		var filtered = new Array();
		var j = 0;
		for(var m = 0; m < words.length; m++){
			if(words[m].length > i){
				filtered[j] = words[m];
				j++;
			}
		}
		return filtered;
	}



// ---------------------
// Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
// ---------------------


var charFreq = function(string){
    var array = string.split("");
    var frequency = {};
    console.log(array.indexOf("a"));
   
    array.forEach(function(element){
        if (!frequency[element]) {frequency[element] = 0};
        frequency[element] += 1;  
    })
    return frequency
}

console.log(charFreq("abbabcbdbabdbdbabababcbcbab"));