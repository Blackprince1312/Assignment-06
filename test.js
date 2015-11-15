// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// ---------------------

function max(num1, num2){
    if (num1 > num2) {
		return true;
	} else {
		return false;
	}
}

  console.log (max(0, 150));

// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------

function maxOfThree(num1, num2, num3){
return math.max(a , b , c );

// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------

function isVowel(char){
   var vowels = ["a", "e" , "i" , "o" ,"u"];
   var isv = false;

   vowels.forEach(function(value){
   if (char === value){
   	isv = true

   }
});
   return isv; 
}

// ---------------------
// Write a function translate() that will translate a text into "rÃ¶varsprÃ¥ket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------

function rovarspraket(phrase){
    //...
    var newstr = ''
    for (var i = 0; i < phrase.length; i += 1){
    	var currentCar = phrase.charAt(i);
    	if (isVowel)(currentChar)) {
	newStr += current;
} else{newstr += currentChar + 'o' + currentChar
}
return  newstr
}
rovarspraket("this is fun")
    }
}


// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

function reverse(str){
	return str.split('').reverse().join('')
    //...
    return words.reduce(function(a , b ) {
    	if (a.length > b.length) {
    		return a;

    	}
    	return b
    	// body...
    });

}

// ---------------------
// Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
// ---------------------

function findLongestWord(words){
    //...
       return words.filter(function(value)){
if (value.length > i){
	return value
    });
}
}

// ---------------------
// Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
// ---------------------

function filterLongWords(words, i){

    //...
    return words.filter(function(value)){
if (value.length > i){
	return value
    });
}
}
filterLongWords(["important", "is", "supercalifrigilistec", "a"] ,3)
// ---------------------
// Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
// ---------------------

function charFreq(string){
    //...function letterCount(str) {
  if (str) {
    var letterObj = {};
    var currentLetter = "";
    var regEx = /^[A-Za-z0-9]*$/;
    for (var i = 0; i < str.length; i += 1) {
      currentLetter = str.charAt(i);
      if (regEx.test(currentLetter)) {
        if (letterObj[currentLetter] !== undefined) {
          letterObj[currentLetter] += 1;
        } else {
          letterObj[currentLetter] = 1;
        }
      }
    }
    return letterObj;
  } else {
    return {};
  }
}

}